<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import { CustomCRS, HeroTileLayer } from '@/utils/map-utils'

import type { MapFloor, MapMatter } from '@/types/Map'

interface MarkData {
  RandomId: number
  X: number
  Y: number
  floor?: number
}

const props = defineProps<{
  marks?: MarkData[]

  layers: MapFloor[]
  matters?: MapMatter[]

  center?: [number, number]
  zoom?: number
}>()

const mapContainerRef = ref<HTMLElement>()
const mapInstanceRef = ref<L.Map>()

const markLayers: Record<number, L.LayerGroup> = {}
const currentFloor = ref<number>(1)

function createMarkLayers() {
  props.layers.forEach((layers) => {
    markLayers[layers.floor] = L.layerGroup()
  })

  props.matters?.forEach((matter) => {
    matter.sites.forEach((site) => {
      const marker = L.marker([site.y, site.x], {
        icon: L.icon({
          iconUrl: matter.icon,
          iconSize: [36, 43.4],
        }),
      }).bindPopup(`${matter.name}<br>X: ${site.x} Y: ${site.y}`)

      marker.addTo(markLayers[site.mapFloor]!)
    })
  })

  props.marks?.forEach((mark) => {
    const marker = L.marker([mark.Y, mark.X], {
      icon: L.icon({
        iconUrl:
          'https://herobox-img.yingxiong.com/map/1749672734516496170.png?x-oss-process=image/resize,w_60',
        iconSize: [36, 43.4],
      }),
    }).bindPopup(`RandomId: ${mark.RandomId}<br>X: ${mark.X} Y: ${mark.Y}`)

    // @TODO 使用 Canvas 绘制 Marker
    marker.addTo(markLayers[mark.floor || 1]!)
  })

  showMarkLayerByFloor(currentFloor.value)
}

function showMarkLayerByFloor(floor: number) {
  const map = mapInstanceRef.value
  if (!map) return

  props.layers.forEach((layer) => {
    if (layer.floor === floor) {
      markLayers[layer.floor]?.addTo(map)
    } else {
      markLayers[layer.floor]?.remove()
    }
  })
}

function onBaseLayerChange(e: L.LayersControlEvent) {
  const layer = props.layers.find((l) => l.name === e.name)
  if (layer) {
    currentFloor.value = layer.floor
  }
}

function initMap() {
  if (!mapContainerRef.value || mapInstanceRef.value) return

  const map = L.map(mapContainerRef.value, {
    preferCanvas: true,

    // Control options
    attributionControl: false,
    zoomControl: false,

    // Map State Options
    crs: CustomCRS,
    center: [2048, 1700],
    zoom: 3,

    // Animation options
    zoomAnimation: false,
  })

  mapInstanceRef.value = map

  L.control.zoom({ position: 'bottomleft' }).addTo(map)

  const baseLayers: Record<string, L.TileLayer> = {}
  props.layers.forEach((layer) => {
    baseLayers[layer.name] = new HeroTileLayer(layer.pic)
  })

  const currentBaseLayer = props.layers.find((l) => l.floor === currentFloor.value)
  if (currentBaseLayer) {
    baseLayers[currentBaseLayer.name]?.addTo(map)
  }

  const layerControl = L.control.layers(
    baseLayers,
    {},
    {
      collapsed: false,
    },
  )
  layerControl.addTo(map)

  createMarkLayers()

  map.on('baselayerchange', onBaseLayerChange)
}

watch(
  () => currentFloor.value,
  (newFloor) => {
    showMarkLayerByFloor(newFloor)
  },
)

onMounted(() => {
  initMap()
})
</script>

<template>
  <div ref="mapContainerRef" class="mapCont"></div>
</template>

<style scoped>
.mapCont {
  background: url(//dnabbs.yingxiong.com/static/img/mapbg.png) 50% / cover no-repeat;
  height: 100%;
  width: 100%;
}
</style>
