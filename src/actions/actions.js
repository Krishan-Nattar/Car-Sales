export const BUY_ITEM = "BUY_ITEM"

export function buyItem(item){
    return {
        type: BUY_ITEM,
        payload: item
    }
}