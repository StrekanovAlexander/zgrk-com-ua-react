import './Header.scss';
import Nav from '../nav/Nav';

export default function() {
    return (
        <div className='header d-flex align-items-center'>
            <div className="container">
                <Nav />      
            </div>
        </div>
    )
}
