import wseilogo from '../assets/wseilogo.png';

const Footer = () =>{
    const footerStyle = {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#444',
        padding: '1em%',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        boxSizing: 'border-box'
    };
    
    return(
        <footer style={footerStyle}>
            <img src={wseilogo} alt="WSEI logo" style={{width: '80px', height: 'auto', marginRight: '10px', objectFit: 'contain'}}/>
            <p style={{margin: 0}}>tomasz.apostolski@microsoft.wsei.edu.pl</p>
        </footer>
    );
};
export default Footer;