import * as idbstorage from 'idb-keyval'

import { isBrowser, isJsDom, isNode } from '../functions/getEnvironment'

const memory = {}

// use memory as default
let store: any = {
  get: (key) => {
    return memory[key]
  },
  set: (key, value) => {
    memory[key] = value
  },
  del: (key) => {
    delete memory[key]
  }
}

if (isBrowser && !isJsDom() && !isNode) {
  store = idbstorage
}

export class ClientStorage {
  static async get(key: string | number): Promise<any> {
    const value = await store.get(String(key))
    try {
      return JSON.parse(value)
    } catch (e) {
      return value
    }
  }
  static async set(key: string | number, value: any): Promise<void> {
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    return await store.set(String(key), value)
  }
  static async del(key: string | number): Promise<void> {
    return await store.del(String(key))
  }
}
