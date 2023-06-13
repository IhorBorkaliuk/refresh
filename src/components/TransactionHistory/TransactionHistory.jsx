import {
  Table,
  Caption,
  TBODY,
  TR,
  TRH,
  TH,
} from './TransactionHistory.styled';

export default function TransactionHistory({items}) {
    return (
        items.map((item => {
            const { type, amount, currency } = item
            return (
              <Table>
                <Caption>
                  <TR>
                    <TH>Type</TH>
                    <TH>Amount</TH>
                    <TH>Currency</TH>
                  </TR>
                </Caption>

                <TBODY>
                  <TR>
                    <TRH>{type}</TRH>
                    <TRH>{amount}</TRH>
                    <TRH>{currency}</TRH>
                  </TR>
                </TBODY>
              </Table>
            );
        }))
    )
}