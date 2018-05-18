import mtg from "mtgsdk";

export default (url) => (
    mtg.card.all()
    .on('data', function (card) {
        console.log(card.name)
    })
)