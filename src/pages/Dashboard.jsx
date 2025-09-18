import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { Button, Badge, Card, Table, Spinner } from "react-bootstrap";
import { Heart, Calendar, People, FileText, Gear, Pencil, Trash, TelephoneFill, ArrowUp, ArrowDown } from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

const apiUrl = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const { auth, logout } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => logout();

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      try {
        const resp = await fetch(`${apiUrl}api/appointments/${auth.username}`);
        const data = await resp.json();
        setAppointments(data.appointments || []);
      } catch (err) {
        console.error("Error fetching appointments:", err);
      } finally {
        setLoading(false);
      }
    };

    if (auth?.username) fetchAppointments();

    const interval = setInterval(() => {
      if (auth?.username) fetchAppointments();
    }, 10000);

    return () => clearInterval(interval);
  }, [auth]);

  const formatDate = (dateStr) => new Date(dateStr).toLocaleString();

  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-bottom py-2">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3 mb-2 mb-md-0">
            <div className="bg-primary rounded d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
              <Heart className="text-white" size={24} />
            </div>
            <div>
              <h4 className="mb-0 text-primary">Pediatric Associates of Frisco</h4>
              <small className="text-muted">Dashboard</small>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <Badge bg="secondary" className="text-capitalize">{auth?.role || "Doctor"}</Badge>
            <span className="text-muted">{auth?.message}</span>
            <Button variant="outline-secondary" size="sm" onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-4">
        <div className="mb-4">
          <h2 className="text-primary">Good morning, Dr. {auth?.name}!</h2>
          <p className="text-muted">Here's what's happening at your clinic today.</p>
        </div>

        {/* Stats Cards */}
        <div className="row mb-4">
          <div className="col-12 col-sm-6 col-md-3 mb-3">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span>Today's Appointments</span>
                  <Calendar size={20} className="text-primary" />
                </div>
                <h3 className="text-primary">{appointments.length}</h3>
                <small className="text-muted">+2 from yesterday</small>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-3">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span>Active Patients</span>
                  <People size={20} className="text-success" />
                </div>
                <h3 className="text-success">248</h3>
                <small className="text-muted">+12 this month</small>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-3">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span>Pending Reports</span>
                  <FileText size={20} className="text-primary" />
                </div>
                <h3 className="text-primary">7</h3>
                <small className="text-muted">3 urgent reviews</small>
              </Card.Body>
            </Card>
          </div>
        </div>
        {/* Appointments Table */}
        <div className="mb-4">
          <Card className="shadow-sm">
            <Card.Body className="p-2">
              <h5 className="mb-3 text-primary"><Calendar className="me-2" /> Upcoming Appointments</h5>
              {loading ? (
                <div className="text-center py-3">
                  <Spinner animation="border" variant="primary" />
                </div>
              ) : appointments.length === 0 ? (
                <p>No appointments scheduled.</p>
              ) : (
                <div className="table-responsive">
                  <Table striped bordered hover className="mb-0">
                    <thead>
                      <tr>
                        <th>Patient Name</th>
                        <th>Date & Time</th>
                        <th>Reason</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appt, idx) => (
                        <tr key={idx}>
                          <td>{`${appt.firstName || ''} ${appt.lastName || ''}`}</td>
                          <td>{formatDate(appt.appointmentTime)}</td>
                          <td>{appt.reasonForAppointment || "General Checkup"}</td>
                          <td>{appt.status || "Scheduled"}</td>
                          <td className="d-flex flex-wrap gap-1">
                            <Button variant="outline-primary" size="sm"><Pencil size={14} /> Edit</Button>
                            <Button variant="outline-danger" size="sm"><Trash size={14} /> Cancel</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
        {/* Voice Hub Section */}
        <div className="row mb-4">
          <div className="col-12">
            <Card className="shadow-sm">
              <Card.Body>
                <h5 className="mb-3 text-primary"><TelephoneFill className="me-2" /> Overview</h5>
                <p className="text-muted mb-4">Real-time call management and system status</p>
                <div className="row">
                  {[
                    { label: "Total Calls Today", value: 247, iconColor: "primary", trend: "up", trendValue: "+12% from yesterday" },
                    { label: "Answered Calls", value: 231, iconColor: "success", trend: null, trendValue: "93.5% answer rate" },
                    { label: "Avg Wait Time", value: "32s", iconColor: "warning", trend: "down", trendValue: "-8s from last week" },
                    { label: "Callbacks Pending", value: 16, iconColor: "danger", trend: null, trendValue: "Requires attention" }
                  ].map((item, idx) => (
                    <div key={idx} className="col-12 col-sm-6 col-md-3 mb-3">
                      <Card className="bg-light shadow-sm border-0 h-100">
                        <Card.Body>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <span className="text-muted">{item.label}</span>
                              <h4 className={`mb-0 text-${item.iconColor}`}>{item.value}</h4>
                              {item.trend && item.trend === "up" && <small className="text-success"><ArrowUp size={12} /> {item.trendValue}</small>}
                              {item.trend && item.trend === "down" && <small className="text-danger"><ArrowDown size={12} /> {item.trendValue}</small>}
                              {!item.trend && <small className="text-muted">{item.trendValue}</small>}
                            </div>
                            <div className={`bg-${item.iconColor} rounded-circle p-2 d-flex align-items-center justify-content-center`} style={{ width: '40px', height: '40px' }}>
                              <TelephoneFill className="text-white" size={20} />
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
                <hr className="my-4" />
                <div className="row">
                  <div className="col-12 col-md-6 mb-3">
                    <Card className="bg-white shadow-sm border-0 h-100">
                      <Card.Body>
                        <h6 className="text-primary">Live Traffic Monitor</h6>
                        <div className="d-flex justify-content-between align-items-center py-2">
                          <span>Current Queue</span>
                          <Badge bg="secondary">3 calls</Badge>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                          <span>Active Lines</span>
                          <Badge bg="success">4/8 lines</Badge>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                          <span>Peak Load Indicator</span>
                          <Badge bg="warning">Medium</Badge>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <Card className="bg-white shadow-sm border-0 h-100">
                      <Card.Body>
                        <h6 className="text-primary">Upcoming Reminders</h6>
                        <div className="d-flex justify-content-between align-items-center py-2">
                          <span>Flu Clinic Reminders</span>
                          <small>50 outbound calls scheduled</small>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                          <span>Callback Commitments</span>
                          <small>Check pending callbacks</small>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>



        {/* Quick Actions & Recent Activity */}
        <div className="row mb-4">
          <div className="col-12 col-lg-6 mb-3">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h5 className="mb-3"><Calendar size={18} className="me-2 text-primary" /> Quick Actions</h5>
                <div className="d-grid gap-2">
                  <Button variant="primary" className="mb-2">New Appointment</Button>
                  <Button variant="success" className="mb-2">Patient Records</Button>
                  <Button variant="outline-secondary" className="mb-2">Lab Results</Button>
                  <Button variant="outline-secondary"><Gear size={16} className="me-1" /> Settings</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h5 className="mb-3"><Heart size={18} className="me-2 text-danger" /> Recent Activity</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><span className="badge bg-primary me-2">&nbsp;</span> Sarah Johnson - Annual checkup completed</li>
                  <li className="mb-2"><span className="badge bg-success me-2">&nbsp;</span> Mike Davis - Vaccination scheduled</li>
                  <li className="mb-2"><span className="badge bg-primary me-2">&nbsp;</span> Emma Wilson - Lab results reviewed</li>
                  <li><span className="badge bg-success me-2">&nbsp;</span> Alex Thompson - Follow-up appointment</li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
