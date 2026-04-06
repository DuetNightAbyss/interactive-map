<script setup lang="ts">
import MapView from '@/components/MapView.vue'
import type { MapFloor } from '@/types/Map'

const Layers: MapFloor[] = [
  {
    floor: 1,
    id: 7,
    name: '冰湖城下水道',
    pic: 'https://herobox-img.yingxiong.com/config/map/kesaituosidiqu/yanhuchengxiashuidao/1.png',
  },
]

const Marks = [
  { RandomId: 9020801, X: 2589, Y: 2968, floor: 1 },
  { RandomId: 9020801, X: 3300, Y: 2856, floor: 1 },
  { RandomId: 9020801, X: 2321, Y: 2255, floor: 1 },
  { RandomId: 9020801, X: 1008, Y: 2295, floor: 1 },
  { RandomId: 9020802, X: 1971, Y: 2857, floor: 1 },
  { RandomId: 9020802, X: 1759, Y: 2119, floor: 1 },
  { RandomId: 9020901, X: 2247, Y: 1750, floor: 1 },
  { RandomId: 9020901, X: 1994, Y: 1680, floor: 1 },
  { RandomId: 9020901, X: 1405, Y: 1563, floor: 1 },
  { RandomId: 9020902, X: 1581, Y: 1071, floor: 1 },
  { RandomId: 9020902, X: 1375, Y: 1955, floor: 1 },
  { RandomId: 9021001, X: 2513, Y: 1976, floor: 1 },
  { RandomId: 9021001, X: 3110, Y: 2157, floor: 1 },
]
</script>

<template>
  <MapView :layers="Layers" :marks="Marks" />
</template>
