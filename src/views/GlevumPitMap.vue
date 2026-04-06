<script setup lang="ts">
import MapView from '@/components/MapView.vue'
import type { MapFloor } from '@/types/Map'

const Layers: MapFloor[] = [
  {
    floor: 1,
    id: 8,
    name: '格雷姆废矿底层1层',
    pic: 'https://herobox-img.yingxiong.com/config/map/kesaituosidiqu/geleimufeikuangdiceng/1.png',
  },
  {
    floor: -1,
    id: 9,
    name: '格雷姆废矿底层-1层',
    pic: 'https://herobox-img.yingxiong.com/config/map/kesaituosidiqu/geleimufeikuangdiceng/-1.png',
  },
  {
    floor: -2,
    id: 10,
    name: '格雷姆废矿底层-2层',
    pic: 'https://herobox-img.yingxiong.com/config/map/kesaituosidiqu/geleimufeikuangdiceng/-2.png',
  },
]

const Marks = [
  { RandomId: 9020401, X: 1450, Y: 3134, floor: 1 },
  { RandomId: 9020401, X: 1441, Y: 1956, floor: 1 },
  { RandomId: 9020501, X: 1970, Y: 2721, floor: 1 },
  { RandomId: 9020501, X: 2116, Y: 2353, floor: 1 },
  { RandomId: 9020601, X: 2871, Y: 2704, floor: -1 },
  { RandomId: 9020601, X: 3107, Y: 2511, floor: -1 },
  { RandomId: 9020601, X: 3031, Y: 2111, floor: -1 },
  { RandomId: 9020701, X: 2888, Y: 1504, floor: -2 },
  { RandomId: 9020701, X: 3384, Y: 1285, floor: -1 },
  { RandomId: 9020701, X: 3464, Y: 795, floor: -2 },
]
</script>

<template>
  <MapView :layers="Layers" :marks="Marks" />
</template>
