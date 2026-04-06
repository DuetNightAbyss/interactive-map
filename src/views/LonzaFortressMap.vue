<script setup lang="ts">
import MapView from '@/components/MapView.vue'
import type { MapFloor } from '@/types/Map'

const Layers: MapFloor[] = [
  {
    floor: 1,
    id: 1,
    name: '龙莎要塞1层',
    pic: 'https://herobox-img.yingxiong.com/config/map/haiboliyadiguo/longshayaosa/longshayaosaizheng1.png',
  },
  {
    floor: -1,
    id: 11,
    name: '龙莎要塞-1层',
    pic: 'https://herobox-img.yingxiong.com/config/map/haiboliyadiguo/longshayaosa/longshayaosaifu1.png',
  },
  {
    floor: -2,
    id: 12,
    name: '龙莎要塞-2层',
    pic: 'https://herobox-img.yingxiong.com/config/map/haiboliyadiguo/longshayaosa/longshayaosaifu2.png',
  },
]

const Marks = [
  { RandomId: 9030101, X: 2873, Y: 1562, floor: 1 },
  { RandomId: 9030101, X: 2988, Y: 1360, floor: 1 },
  { RandomId: 9030102, X: 1829, Y: 1747, floor: -1 },
  { RandomId: 9030102, X: 1918, Y: 1207, floor: 1 },
  { RandomId: 9030102, X: 2554, Y: 1189, floor: 1 },
  { RandomId: 9030201, X: 1143, Y: 2718, floor: -1 },
  { RandomId: 9030201, X: 1079, Y: 2634, floor: -1 },
  { RandomId: 9030201, X: 1723, Y: 2830, floor: -1 },
  { RandomId: 9030202, X: 1510, Y: 1810, floor: -1 },
  { RandomId: 9030202, X: 1379, Y: 2640, floor: -1 },
  { RandomId: 9030202, X: 1056, Y: 2391, floor: -1 },
]
</script>

<template>
  <MapView :layers="Layers" :marks="Marks" />
</template>
