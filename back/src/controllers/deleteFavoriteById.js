const { Favorite } =  require('../db');

const deletefavoriteById = async (id) => {
    try {
        const favoriteFinded = await Favorite.findById(id)
        if(!favoriteFinded) throw new Error('No existe ese Favorito =(')

        favoriteFinded.destroy();
    } catch (error) {
        return {erro: error.message};
    }
}


module.exports = deletefavoriteById;