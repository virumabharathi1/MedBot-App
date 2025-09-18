import React, { useState } from "react";
import { Nav, Offcanvas, Button } from "react-bootstrap";
import {
  Heart,
  Speedometer2,
  Calendar,
  PersonCircle,
  TelephoneFill,
  BoxArrowLeft,
  Plug,
  BarChartFill,
  Gear,
  List
} from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = ({ activeMenu, handleLogout }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sidebarContent = (
    <div className="d-flex flex-column vh-100 bg-white text-dark p-3 sidebar-container">
      <div className="d-flex align-items-center mb-4 px-2">
        <Heart className="text-primary me-2" size={28} />
        <h5 className="mb-0 fw-semibold">Pediatric Clinic</h5>
      </div>

      <Nav className="flex-column small flex-grow-1 overflow-auto">
        <Nav.Link
          href="#"
          className={`sidebar-link d-flex align-items-center gap-2 mb-2 py-2 px-3 rounded ${activeMenu === 'dashboard' ? 'active' : ''}`}
        >
          <Speedometer2 size={18} />
          <span>Dashboard</span>
        </Nav.Link>

        <div className="sidebar-item d-flex align-items-center gap-2 mb-2 py-2 px-3 text-muted">
          <Calendar size={18} />
          <span>Appointments</span>
        </div>

        <div className="sidebar-item d-flex align-items-center gap-2 mb-2 py-2 px-3 text-muted">
          <PersonCircle size={18} />
          <span>Patients</span>
        </div>

        <div className="sidebar-item d-flex align-items-center gap-2 mb-2 py-2 px-3 text-muted">
          <TelephoneFill size={18} />
          <span>Call Management</span>
        </div>

        <div className="sidebar-item d-flex align-items-center gap-2 mb-2 py-2 px-3 text-muted">
          <Plug size={18} />
          <span>Integrations</span>
        </div>

        <div className="sidebar-item d-flex align-items-center gap-2 mb-2 py-2 px-3 text-muted">
          <BarChartFill size={18} />
          <span>Analytics</span>
        </div>

        <div className="sidebar-item d-flex align-items-center gap-2 mb-2 py-2 px-3 text-muted">
          <Gear size={18} />
          <span>Settings</span>
        </div>
      </Nav>

      <div className="mt-auto">
        <hr className="text-muted" />
        <Nav.Link onClick={handleLogout} className="d-flex align-items-center gap-2 px-3 text-danger">
          <BoxArrowLeft size={18} />
          <span>Logout</span>
        </Nav.Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Hamburger */}
      <Button 
        variant="primary" 
        className="d-lg-none m-2"
        onClick={handleShow}
      >
        <List size={24} />
      </Button>

      {/* Desktop Sidebar */}
      <div className="d-none d-lg-flex flex-column" style={{ width: '220px' }}>
        {sidebarContent}
      </div>

      {/* Mobile Offcanvas Sidebar */}
      <Offcanvas show={show} onHide={handleClose} className="bg-white">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Pediatric Clinic</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {sidebarContent}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
