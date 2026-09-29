import { MapPin, Phone } from 'lucide-react';
import styles from './header-actions.module.css';

export function HeaderActions() {
  return (
    <div className={styles.actions}>
      <a className={styles.location} href="https://www.google.com/maps/dir/?api=1&destination=Dankove%C4%8Dka%20ulica%2012%2C%2010000%20Zagreb&travelmode=driving" target="_blank" rel="noopener noreferrer" aria-label="Prikaži lokaciju salona na Google Maps" title="Lokacija salona">
        <MapPin aria-hidden="true" size={18} strokeWidth={1.5} />
      </a>
      <a className={styles.booking} href="tel:+385916015254">
        <Phone aria-hidden="true" size={15} />
        <span>Rezerviraj termin</span>
      </a>
    </div>
  );
}
