var sql = require('../controllers/databaseController');
const QueryUtils = require('../utils/QueryUtils');
const createModel = QueryUtils.createModel;
const getAllModels = QueryUtils.getAllModels;

var Provider = function(provider) {
    this.uid = provider.uid;
    this.numDeliveries = provider.numDeliveries;
    this.requestId = provider.requestId;
}

Provider.createProvider = function(newProvider, result) {
    createModel("provider", newProvider, result);
};

Provider.getProviderById = function(providerId, result) {
    sql.query(
        {
            sql: "SELECT * FROM provider WHERE uid = ?",
            values: [providerId] 
        },
        function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            }
        }
    );
};

Provider.getAllProviders = function(result) {
    getAllModels("provider", result);
};

module.exports = Provider;