import axios from "axios";
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
export const getOne = async () => {
    return new Promise(async (resolve, reject) => {
        const res: any = await axios.get("https://v1.hitokoto.cn/?c=j");
        const json: OneData = res.data;
        resolve(json);
    })

}