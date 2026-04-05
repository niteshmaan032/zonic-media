import { AdminContentCard } from "./AdminContentCard";

export function AdminFormsContent() {
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="row g-4">
        <div className="col-12">
          <AdminContentCard title="Floating Label">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="floatingSelect"
                defaultValue=""
              >
                <option value="" disabled>
                  Open this select menu
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <label htmlFor="floatingSelect">Works with selects</label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                style={{ height: "150px" }}
              />
              <label htmlFor="floatingTextarea">Comments</label>
            </div>
          </AdminContentCard>
        </div>
      </div>
    </div>
  );
}
