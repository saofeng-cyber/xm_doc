import { ref } from "vue";

export interface OneData {
    id: number,
    uuid: string,
    hitokoto: string,
    type: string,
    from: string,
    from_who: string,
    creator: string,
    created_at: string,
    length: number
}
export const getOne =  async () => {
    const oneData = ref<OneData>()
    await getOne();
    async function getOne() {
        const url = new Request("https://v1.hitokoto.cn/?c=j");
        const data = await fetch(url);
        const json = await data.json() as OneData;
        oneData.value = json;
    }
    return { oneData, getOne };
}