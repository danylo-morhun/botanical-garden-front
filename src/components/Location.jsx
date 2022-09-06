import React from "react";

export default function Location() {
    return (
<div className="location">
<h2 className="location__title">
    Місцезнаходження саду
</h2>
<div className="location__map">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5077.2452867020575!2d32.58974002317306!3d46.6581468931982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c41a839f49d107%3A0xbe04a726ee205c46!2sKhersons%CA%B9kyy%20Botanichnyy%20Sad%2C%20Mykolaivske%20Hwy%2C%2029%2C%20Kherson%2C%20Khersons&#39;ka%20oblast%2C%2073000!5e0!3m2!1sen!2sua!4v1647007703135!5m2!1sen!2sua "
                            width={1180} height={510} loading="lazy " className="map" title="map"></iframe>
</div>
</div>
    );
}