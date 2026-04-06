<script setup lang="ts">
import { computed } from 'vue'

import AppNavItem from './AppNavItem.vue'

const navItems = computed(() => [
  { href: '/icelake-city', name: '冰湖城' },
  { href: '/icelake-sew', name: '冰湖城下水道' },
  { href: '/glevum-pit', name: '格雷姆废矿' },
  { href: '/lonza-fortress', name: '龙莎要塞' },
  { href: '/mistwharf', name: '烟津渡' },
  { href: '/haojing', name: '皓京' },
  { href: '/outer-peaks', name: '山外山' },
  { href: '/youlai-alley', name: '由来巷' },
])
</script>

<template>
  <v-navigation-drawer>
    <v-list>
      <app-nav-item v-for="item in navItems" :key="item.href" :to="item.href">
        {{ item.name }}
      </app-nav-item>
    </v-list>
  </v-navigation-drawer>
</template>
