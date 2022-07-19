const config = {
  user: "Developer", // sql user
  password: "P@55w0rd", //sql user password
  server: "127.0.0.1", // if it does not work try- localhost
  database: "SchedulerDB",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "SQLEXPRESS", // SQL Server instance name
  },
  port: 1433,
};

module.exports = config;
