import './Nav.scss';
export default function() {
    return(
        <div className="nav">
            <div className='brand'>
                <a href="/">
                    <img src="/images/logotypes/logo-zzrk.png"/>
                </a>
                <a href="#">
                    <span>ПрАТ</span>
                    <span>&quot;ЗЗРК&quot;</span>
                </a>
            </div>
            <ul>
                <li><a>Головна</a></li>
                <li><a>Підприємство</a></li>
                <li><a>Персонал</a></li>
            </ul>
        </div>
    );
}