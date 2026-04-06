<script setup lang="ts">
import MapView from '@/components/MapView.vue'
import type { MapFloor, MapMatter } from '@/types/Map'

const Layers: MapFloor[] = [
  {
    floor: 1,
    id: 1045,
    name: '皓京1层',
    pic: 'https://herobox-img.yingxiong.com/config/map/haojing/haojing/1.png',
  },
]

const Matters: MapMatter[] = [
  {
    name: '宝箱',
    icon: 'https://herobox-img.yingxiong.com/map/1749566001012138274.png',
    sites: [
      { mapFloor: 1, x: 1665, y: 2586 },
      { mapFloor: 1, x: 2010, y: 2238 },
      { mapFloor: 1, x: 1321, y: 1960 },
      { mapFloor: 1, x: 2723, y: 1597 },
      { mapFloor: 1, x: 2906, y: 1705 },
      { mapFloor: 1, x: 2500, y: 2499 },
      { mapFloor: 1, x: 2368, y: 2576 },
      { mapFloor: 1, x: 2534, y: 2735 },
      { mapFloor: 1, x: 2664, y: 2416 },
      { mapFloor: 1, x: 2588, y: 2528 },
      { mapFloor: 1, x: 2534, y: 2400 },
      { mapFloor: 1, x: 2407, y: 2179 },
      { mapFloor: 1, x: 2503, y: 2166 },
      { mapFloor: 1, x: 1665, y: 2741 },
      { mapFloor: 1, x: 1821, y: 2758 },
      { mapFloor: 1, x: 2033, y: 2689 },
      { mapFloor: 1, x: 1816, y: 2587 },
      { mapFloor: 1, x: 1981, y: 2544 },
      { mapFloor: 1, x: 1917, y: 2435 },
      { mapFloor: 1, x: 2054, y: 2343 },
      { mapFloor: 1, x: 2106, y: 2517 },
      { mapFloor: 1, x: 1978, y: 2046 },
      { mapFloor: 1, x: 2040, y: 2107 },
      { mapFloor: 1, x: 2188, y: 2109 },
      { mapFloor: 1, x: 2343, y: 2108 },
      { mapFloor: 1, x: 2327, y: 1988 },
      { mapFloor: 1, x: 2175, y: 1820 },
      { mapFloor: 1, x: 2388, y: 1720 },
      { mapFloor: 1, x: 2404, y: 1749 },
      { mapFloor: 1, x: 2071, y: 1690 },
      { mapFloor: 1, x: 2420, y: 1486 },
      { mapFloor: 1, x: 1230, y: 2204 },
      { mapFloor: 1, x: 1366, y: 1910 },
      { mapFloor: 1, x: 1332, y: 1884 },
      { mapFloor: 1, x: 1316, y: 2010 },
      { mapFloor: 1, x: 1327, y: 1954 },
      { mapFloor: 1, x: 1410, y: 2004 },
      { mapFloor: 1, x: 1537, y: 1959 },
      { mapFloor: 1, x: 1667, y: 1628 },
      { mapFloor: 1, x: 1773, y: 1600 },
      { mapFloor: 1, x: 1689, y: 1576 },
      { mapFloor: 1, x: 2519, y: 2096 },
      { mapFloor: 1, x: 2583, y: 2138 },
      { mapFloor: 1, x: 2614, y: 2177 },
      { mapFloor: 1, x: 2677, y: 1827 },
      { mapFloor: 1, x: 2699, y: 1636 },
      { mapFloor: 1, x: 2708, y: 1583 },
      { mapFloor: 1, x: 1621, y: 2303 },
      { mapFloor: 1, x: 1776, y: 2622 },
      { mapFloor: 1, x: 1909, y: 2296 },
      { mapFloor: 1, x: 2092, y: 2630 },
      { mapFloor: 1, x: 2199, y: 1428 },
      { mapFloor: 1, x: 2257, y: 1428 },
      { mapFloor: 1, x: 1769, y: 1784 },
      { mapFloor: 1, x: 1740, y: 1554 },
      { mapFloor: 1, x: 1650, y: 1571 },
      { mapFloor: 1, x: 1531, y: 2416 },
      { mapFloor: 1, x: 1662, y: 2874 },
      { mapFloor: 1, x: 1922, y: 2168 },
      { mapFloor: 1, x: 1713, y: 1966 },
    ],
  },
]
</script>

<template>
  <MapView :layers="Layers" :matters="Matters" />
</template>
