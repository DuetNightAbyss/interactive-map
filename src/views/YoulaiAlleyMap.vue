<script setup lang="ts">
import MapView from '@/components/MapView.vue'
import type { MapFloor, MapMatter } from '@/types/Map'

const Layers: MapFloor[] = [
  {
    floor: 1,
    id: 1055,
    name: '1层',
    pic: 'https://herobox-img.yingxiong.com/config/map/haojing/youlaixiang/1.png',
  },
]

const Matters: MapMatter[] = [
  {
    name: '太虚符文',
    icon: 'https://herobox-img.yingxiong.com/map/1765894335012307828.png',
    sites: [
      { mapFloor: 1, x: 2121, y: 2331 },
      { mapFloor: 1, x: 2023, y: 2338 },
      { mapFloor: 1, x: 2054, y: 2338 },
      { mapFloor: 1, x: 2089, y: 2338 },
      { mapFloor: 1, x: 2290, y: 2009 },
      { mapFloor: 1, x: 2269, y: 2056 },
      { mapFloor: 1, x: 2281, y: 2041 },
      { mapFloor: 1, x: 2288, y: 2027 },
    ],
  },
]
</script>

<template>
  <MapView :layers="Layers" :matters="Matters" />
</template>
