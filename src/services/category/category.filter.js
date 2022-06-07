const logger = require('../../config/logger')

const filteredCategoryList = async(categoryList,filterCriteria) => {
    const filteredCategory = categoryList.filter(category => {
    try{
        let isValid = true;
        for (key in filterCriteria) {
            isValid = isValid && category[key] == filterCriteria[key];
        }
        return isValid;
    }catch{
        logger.error(`Error occured while product ${category.category_id}`, err);
    }
  });
  return filteredCategory;
}
// exports
module.exports = {
    filteredCategoryList
}
