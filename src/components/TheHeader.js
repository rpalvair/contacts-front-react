import packageJson from '../../package.json';
import { Navbar } from "react-bootstrap"

const TheHeader = () => (
    <header>
        <Navbar bg="light">
            <Navbar.Brand className="h1 mb-0">My Contacts</Navbar.Brand>
            <span>with React {packageJson.dependencies['react'].substring(1)}</span>
        </Navbar>
    </header>
)

export default TheHeader