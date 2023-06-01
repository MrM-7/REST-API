import Product from "../model/productModel.js"

const getAllProducts = async (req, res) => {
    const queryObject = {}
    const { company, name, featured, sort, select } = req.query

    if(company){
        queryObject.company = company
    }

    if(featured){
        queryObject.featured = featured
    }
  
    if(name){
        queryObject.name = { $regex: name, $options: "i" }
    }

    let apiData = Product.find(queryObject)

    if(sort){
        let sortFix = sort.split(",").join(" ")
        apiData = apiData.sort(sortFix)
    }

    if(select){
        let selectFix = select.split(",").join(" ")
        apiData = apiData.select(selectFix)
    }

    // pagination
    let page = Number(req.query.page) || 1
    let limit = Number(req.query.limit) || 10

    let skip = (page-1)*limit

    apiData = apiData.skip(skip).limit(limit)

    const Products = await apiData
    res.status(200).json({ Products, nbHits: Products.length })
}


const getAllProductsTesting = async (req, res) => {

    const data = await Product.find(req.query).select("name")
    res.status(200).json({data})
}

export { getAllProducts, getAllProductsTesting }