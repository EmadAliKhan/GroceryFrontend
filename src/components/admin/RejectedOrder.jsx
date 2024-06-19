import React from 'react'

const RejectedOrder = () => {
  return (
    <>
      <div>
          <h2 className="fw-bolder mb-4 mt-3"> No. Of Orders Rejected : 0  </h2>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>S.No</th>
                <th>OrderName</th>
                <th>Size</th>
                <th>ClientName</th>
                <th>Address</th>
                <th>ClientNumber</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>T-Shirt</td>
                <td>Small</td>
                <td>Aslam</td>
                <td>LinesArea Karachi</td>
                <td>03186342262</td>
                {/* <td>
                  <button className="btn btn-white text-danger bg-white">
                    Delivered
                  </button>
                  <button className="btn btn-white text-danger bg-white ms-2">
                    Rejected
                  </button>
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
    </>
  )
}

export default RejectedOrder
