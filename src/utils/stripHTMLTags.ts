export default function stripString(data: string){
    return data.replace(/(<([^>]+)>)/gi, "");
}