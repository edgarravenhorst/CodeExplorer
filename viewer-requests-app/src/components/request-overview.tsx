import { ThumbUp } from "@mui/icons-material"
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const temporaryRows = [
  {
    id: 1,
    name: 'Request 1',
    description: 'Request 1 description',
    status: 'Request 1 status',
    type: 'Request 1 type',
    priority: 'Request 1 priority',
  },
  {
    id: 2,
    name: 'Request 2',
    description: 'Request 2 description',
    status: 'Request 2 status',
    type: 'Request 2 type',
    priority: 'Request 2 priority',
  },
  {
    id: 3,
    name: 'Request 3',
    description: 'Request 3 description',
    status: 'Request 3 status',
    type: 'Request 3 type',
    priority: 'Request 3 priority',
  }
]

export const RequestOverview = () => {
    return (
        <div>
            <h1>Request Overview</h1>
            <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Request code</TableCell>
                      <TableCell>Request name</TableCell>
                      <TableCell>Request description</TableCell>
                      <TableCell>Request status</TableCell>
                      <TableCell>Request type</TableCell>
                      <TableCell>Request priority</TableCell>
                      <TableCell padding="checkbox"><IconButton disabled><ThumbUp /></IconButton></TableCell>
                    </TableRow>
                    </TableHead>  
                    <TableBody>
                      {temporaryRows.map((row) => (
                        <TableRow>
                          <TableCell>{row.id}</TableCell>
                          <TableCell>{row.name} </TableCell>
                          <TableCell>{row.description}</TableCell>
                          <TableCell>{row.status}</TableCell>
                          <TableCell>{row.type}</TableCell>
                          <TableCell>{row.priority}</TableCell>
                          <TableCell padding="checkbox"><IconButton><ThumbUp /></IconButton></TableCell>
                      </TableRow>
                      )) }
                  </TableBody>
              </Table>
            </TableContainer>
        </div>
    )
} 