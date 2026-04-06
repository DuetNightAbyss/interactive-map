import L from 'leaflet'

const MAP_MIN_ZOOM = 2
const MAP_MAX_ZOOM = 6
const IMG_SOURCE_SIZE = 4096

interface HeroLayerOptions extends L.TileLayerOptions {
  imgSourceSize: number
}

export class HeroTileLayer extends L.TileLayer {
  private _url: string

  constructor(url: string, options?: HeroLayerOptions) {
    super(url, options)

    options = {
      minZoom: MAP_MIN_ZOOM,
      maxZoom: MAP_MAX_ZOOM,
      noWrap: true,
      tileSize: 256,
      imgSourceSize: IMG_SOURCE_SIZE,
      ...options,
    }

    const opts = L.Util.setOptions(this, options)
    opts.bounds = [
      [0, 0],
      [opts.imgSourceSize, opts.imgSourceSize],
    ]

    this._url = url
  }

  getTileUrl(coords: L.Coords): string {
    const opts = this.options as HeroLayerOptions
    const { tileSize, imgSourceSize } = opts

    const EPSILON = 1e-7
    const zoom = imgSourceSize / 2 ** coords.z

    const cropX = Math.floor(coords.x * zoom + EPSILON)
    const cropY = Math.floor(coords.y * zoom + EPSILON)
    const cropW = Math.ceil(zoom + EPSILON)
    const cropH = Math.ceil(zoom + EPSILON)

    if (cropX < imgSourceSize && cropY < imgSourceSize && cropX + cropW > 0 && cropY + cropH > 0) {
      const x = Math.max(0, cropX)
      const y = Math.max(0, cropY)
      const w = Math.min(cropW, imgSourceSize - x)
      const h = Math.min(cropH, imgSourceSize - y)

      if (w > 0 && h > 0) {
        return `${this._url}?x-oss-process=image/crop,x_${x},y_${y},w_${w},h_${h}/resize,w_${tileSize},h_${tileSize},limit_0/format,webp`
      }
    }

    return L.Util.emptyImageUrl
  }
}

export const CustomCRS = L.Util.extend({}, L.CRS.Simple, {
  transformation: new L.Transformation(0.0625, 0, 0.0625, 0),
})
