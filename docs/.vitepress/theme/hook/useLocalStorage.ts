
class LocalCache {
    storage: Storage;

    /**
     * 构造函数，用于初始化对象
     *
     * @param isLocal 是否本地存储，true表示本地存储，false表示会话存储
     */
    constructor(isLocal = true) {
        this.storage = isLocal ? localStorage : sessionStorage
    }

    /**
     * 获取指定键值对应的值
     *
     * @param key 键名
     * @returns 返回指定键值对应的值，若获取失败则返回原值
     */
    getItem(key: string) {
        const json = this.storage.getItem(key)
        try {
            if (json) {
                return JSON.parse(json)
            } else {
                return null
            }

        } catch (err) {
            // 返回原值
        }
        return null
    }

    /**
     * 设置存储项
     *
     * @param key 存储项的键名
     * @param value 存储项的值
     * @returns 无返回值
     */
    setItem(key: string, value: any): void {
        if (typeof value === 'object') value = JSON.stringify(value)
        this.storage.setItem(key, value)
    }

    /**
     * 从存储中删除指定键名的项
     *
     * @param key 要删除的项的键名
     * @returns 无返回值
     */
    removeItem(key: string): void {
        this.storage.removeItem(key)
    }

    /**
     * 清空本地存储的所有数据
     */
    clear(): void {
        this.storage.clear()
    }

    /**
     * 获取存储中指定索引的键值
     *
     * @param index 索引值
     * @returns 返回指定索引的键值
     */
    key(index: number) {
        return this.storage.key(index)
    }

    /**
     * 获取存储数组的长度
     *
     * @returns 返回存储数组的长度
     */
    length() {
        return this.storage.length
    }
}

const localCache = new LocalCache()
const sessionCache = new LocalCache(false)

export {
    localCache,
    sessionCache
}