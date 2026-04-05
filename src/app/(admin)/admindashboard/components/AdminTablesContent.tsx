import { AdminContentCard } from "./AdminContentCard";

const responsiveRows = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@email.com",
    country: "USA",
    zip: "123",
    status: "Member",
  },
  {
    id: 2,
    firstName: "Mark",
    lastName: "Otto",
    email: "mark@email.com",
    country: "UK",
    zip: "456",
    status: "Member",
  },
  {
    id: 3,
    firstName: "Jacob",
    lastName: "Thornton",
    email: "jacob@email.com",
    country: "AU",
    zip: "789",
    status: "Member",
  },
];

export function AdminTablesContent() {
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="row g-4">
        <div className="col-12">
          <AdminContentCard title="Responsive Table">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Country</th>
                    <th scope="col">ZIP</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {responsiveRows.map((row) => (
                    <tr key={row.id}>
                      <th scope="row">{row.id}</th>
                      <td>{row.firstName}</td>
                      <td>{row.lastName}</td>
                      <td>{row.email}</td>
                      <td>{row.country}</td>
                      <td>{row.zip}</td>
                      <td>{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AdminContentCard>
        </div>
      </div>
    </div>
  );
}
