<script setup lang="ts">
import MapView from '@/components/MapView.vue'
import type { MapFloor, MapMatter } from '@/types/Map'

const Layers: MapFloor[] = [
  {
    floor: 1,
    id: 1052,
    name: '1层',
    pic: 'https://herobox-img.yingxiong.com/config/map/haojing/shanwaishan/1.png',
  },
]

const Matters: MapMatter[] = [
  {
    name: '太虚符文',
    icon: 'https://herobox-img.yingxiong.com/map/1765894335012307828.png',
    sites: [
      { mapFloor: 1, x: 2458, y: 2283 },
      { mapFloor: 1, x: 2431, y: 2270 },
      { mapFloor: 1, x: 2415, y: 2267 },
      { mapFloor: 1, x: 2253, y: 2555 },
      { mapFloor: 1, x: 2270, y: 2549 },
      { mapFloor: 1, x: 2286, y: 2540 },
      { mapFloor: 1, x: 2446, y: 2276 },
    ],
  },
]
</script>

<template>
  <MapView :layers="Layers" :matters="Matters" />
</template>
