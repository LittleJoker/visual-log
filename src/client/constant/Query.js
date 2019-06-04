const tableName = 'data_flow';
const funnelTableName = 'data_flow_funnel';

export const SQL = {
  SQL_SELECT_PC_FUNNEL: `SELECT * FROM ${funnelTableName} WHERE platform = 'pc'`
};
