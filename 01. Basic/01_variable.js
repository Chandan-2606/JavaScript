const accountId = 144553
let accountEmail = "Chandan@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState

// accuntId = 2 // not allowed
accountEmail = "chan@gmail.com"
accountPassword = "23232323"
// accountCity = "Bangaluru"



console.log(accountId);

/**
 * Prefer not to use var
 * because of issue in block sccpe and functional scope.
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

