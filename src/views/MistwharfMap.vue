<script setup lang="ts">
import MapView from '@/components/MapView.vue'
import type { MapFloor } from '@/types/Map'

const Layers: MapFloor[] = [
  {
    floor: 1,
    id: 14,
    name: '华胥',
    pic: 'https://herobox-img.yingxiong.com/config/map/huaxu/huaxu/huaxu.png',
  },
  {
    floor: -1,
    id: 15,
    name: '华胥-1层',
    pic: 'https://herobox-img.yingxiong.com/config/map/huaxu/huaxu/huaxu-1.png',
  },
]

const Marks = [
  { RandomId: 9040101, X: 2582, Y: 2761, floor: 1 },
  { RandomId: 9040101, X: 2697, Y: 3120, floor: 1 },
  { RandomId: 9040101, X: 2700, Y: 2699, floor: 1 },
  { RandomId: 9040102, X: 2491, Y: 2744, floor: 1 },
  { RandomId: 9040102, X: 2807, Y: 2277, floor: 1 },
  { RandomId: 9040102, X: 3022, Y: 2452, floor: 1 },
  { RandomId: 9040103, X: 2801, Y: 2788, floor: 1 },
  { RandomId: 9040103, X: 2813, Y: 2544, floor: 1 },
  { RandomId: 9040201, X: 2510, Y: 2581, floor: 1 },
  { RandomId: 9040201, X: 2701, Y: 2158, floor: 1 },
  { RandomId: 9040201, X: 2150, Y: 2353, floor: 1 },
  { RandomId: 9040301, X: 2327, Y: 2463, floor: -1 },
  { RandomId: 9040301, X: 2048, Y: 2606, floor: -1 },
  { RandomId: 9040301, X: 2148, Y: 2352, floor: -1 },
  { RandomId: 9040401, X: 2440, Y: 2121, floor: 1 },
  { RandomId: 9040401, X: 2516, Y: 2024, floor: 1 },
  { RandomId: 9040401, X: 2587, Y: 1896, floor: 1 },
  { RandomId: 9040401, X: 2622, Y: 1961, floor: 1 },
  { RandomId: 9040501, X: 2294, Y: 1578, floor: 1 },
  { RandomId: 9040501, X: 2330, Y: 1733, floor: 1 },
  { RandomId: 9040501, X: 2364, Y: 1438, floor: 1 },
  { RandomId: 9040502, X: 2262, Y: 1703, floor: 1 },
  { RandomId: 9040502, X: 2373, Y: 1576, floor: 1 },
  { RandomId: 9040502, X: 2510, Y: 1806, floor: 1 },
  { RandomId: 9040601, X: 2024, Y: 2158, floor: 1 },
  { RandomId: 9040601, X: 1979, Y: 2002, floor: 1 },
  { RandomId: 9040601, X: 2171, Y: 2084, floor: 1 },
  { RandomId: 9040601, X: 2194, Y: 1922, floor: 1 },
  { RandomId: 9040701, X: 1722, Y: 2312, floor: 1 },
  { RandomId: 9040701, X: 1672, Y: 2243, floor: 1 },
  { RandomId: 9040701, X: 1488, Y: 2082, floor: 1 },
  { RandomId: 9040702, X: 1820, Y: 2246, floor: 1 },
  { RandomId: 9040702, X: 1675, Y: 2179, floor: 1 },
  { RandomId: 9040702, X: 1635, Y: 2167, floor: 1 },
  { RandomId: 9040801, X: 1206, Y: 2221, floor: 1 },
  { RandomId: 9040801, X: 1030, Y: 2049, floor: 1 },
  { RandomId: 9040801, X: 888, Y: 2151, floor: 1 },
  { RandomId: 9040901, X: 1739, Y: 1610, floor: 1 },
  { RandomId: 9040901, X: 1684, Y: 1760, floor: 1 },
  { RandomId: 9040901, X: 1675, Y: 1935, floor: 1 },
  { RandomId: 9040901, X: 1578, Y: 1476, floor: 1 },
]
</script>

<template>
  <MapView :layers="Layers" :marks="Marks" />
</template>
