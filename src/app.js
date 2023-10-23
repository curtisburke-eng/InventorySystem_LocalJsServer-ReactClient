// Instantiate & construct new class
const inventory = new databaseConn({
    // Connection Variables
    port: 8000,
    ipAddress: '127.0.0.1',
    maxReconnectCount: 5000,
    // Connection Functions
    connect() {
        import('./db_connect.php')
    }, 
    getQty(){

    },
    putQty(){

    }
});

// Start things up when document is ready 
// Runs on startup & refresh
$(document).ready(function () {
    // Connect to Database
    inventory.connect();
	// Read variables
	inventory.getQty();

});