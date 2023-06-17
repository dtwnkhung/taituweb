import React from "react";

export type PointMap = {
  lat: number,
  long: number
}

interface ContactMapProps {
  points?: PointMap[]
}

function ContactMap(props: ContactMapProps) {
  return (
    <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9524306541803!2d108.2208009!3d16.0679581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421833918b660b%3A0x6928926e4f26daf4!2zMTI0IE5ndXnhu4VuIENow60gVGhhbmgsIEjhuqNpIENow6J1IDEsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDA!5e0!3m2!1svi!2s!4v1680937238659!5m2!1svi!2s"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* {props.points?.map(point => {
        return <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9524306541803!2d${point.lat}!3d${point.long}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421833918b660b%3A0x6928926e4f26daf4!2zMTI0IE5ndXnhu4VuIENow60gVGhhbmgsIEjhuqNpIENow6J1IDEsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDA!5e0!3m2!1svi!2s!4v1680937238659!5m2!1svi!2s`}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      })} */}
    </div>
  );
}

export default ContactMap;
