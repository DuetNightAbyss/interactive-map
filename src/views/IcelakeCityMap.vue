<script setup lang="ts">
import MapView from '@/components/MapView.vue'
import type { MapFloor } from '@/types/Map'

const Layers: MapFloor[] = [
  {
    floor: 1,
    id: 5,
    name: '冰湖城1层',
    pic: 'https://herobox-img.yingxiong.com/config/map/kesaituosidiqu/yanhucheng/1.png',
  },
  {
    floor: -1,
    id: 6,
    name: '冰湖城-1层',
    pic: 'https://herobox-img.yingxiong.com/config/map/kesaituosidiqu/yanhucheng/-1.png',
  },
]

const Marks = [
  { RandomId: 9020101, X: 2139, Y: 2676, floor: 1 },
  { RandomId: 9020101, X: 2196, Y: 2918, floor: 1 },
  { RandomId: 9020102, X: 2238, Y: 2657, floor: 1 },
  { RandomId: 9020102, X: 2490, Y: 2280, floor: 1 },
  { RandomId: 9020102, X: 2546, Y: 2594, floor: 1 },
  { RandomId: 9020102, X: 2709, Y: 2613, floor: 1 },
  { RandomId: 9020103, X: 2301, Y: 2962, floor: 1 },
  { RandomId: 9020103, X: 2344, Y: 2694, floor: 1 },
  { RandomId: 9020104, X: 2752, Y: 2796, floor: 1 },
  { RandomId: 9020201, X: 2316, Y: 2114, floor: -1 },
  { RandomId: 9020201, X: 2398, Y: 1725, floor: -1 },
  { RandomId: 9020201, X: 2404, Y: 1978, floor: -1 },
  { RandomId: 9020201, X: 2776, Y: 1402, floor: -1 },
  { RandomId: 9020202, X: 2958, Y: 1277, floor: -1 },
  { RandomId: 9020202, X: 3259, Y: 1314, floor: -1 },
  { RandomId: 9020203, X: 2467, Y: 2173, floor: -1 },
  { RandomId: 9020203, X: 2569, Y: 1751, floor: -1 },
  { RandomId: 9020203, X: 2795, Y: 1712, floor: -1 },
  { RandomId: 9020203, X: 3089, Y: 1620, floor: -1 },
  { RandomId: 9020204, X: 1795, Y: 1422, floor: -1 },
  { RandomId: 9020204, X: 2069, Y: 1717, floor: -1 },
  { RandomId: 9020205, X: 1807, Y: 2090, floor: -1 },
  { RandomId: 9020205, X: 1991, Y: 1790, floor: -1 },
  { RandomId: 9020205, X: 1499, Y: 1886, floor: -1 },
  { RandomId: 9020301, X: 1534, Y: 2773, floor: 1 },
  { RandomId: 9020301, X: 1450, Y: 2564, floor: 1 },
  { RandomId: 9020301, X: 1588, Y: 2417, floor: 1 },
  { RandomId: 9020301, X: 1697, Y: 2278, floor: 1 },
  { RandomId: 9020301, X: 1706, Y: 2806, floor: 1 },
  { RandomId: 9020302, X: 1636, Y: 2457, floor: 1 },
  { RandomId: 9020302, X: 1687, Y: 2991, floor: 1 },
  { RandomId: 9020302, X: 1688, Y: 2918, floor: 1 },
  { RandomId: 9020302, X: 1705, Y: 2242, floor: 1 },
]
</script>

<template>
  <MapView :layers="Layers" :marks="Marks" />
</template>
