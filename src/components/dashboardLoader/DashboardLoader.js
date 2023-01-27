import React from "react";
import ContentLoader from "react-content-loader";

const DashboardLoader = () => (
  <ContentLoader
    width={1400}
    height={550}
    viewBox="0 0 1400 550"
    backgroundColor="#eaeced"
    foregroundColor="#ffffff"
  >
    {/* cards */}
    <rect x="0" y="0" rx="3" ry="3" width="230" height="150" />
    <rect x="280" y="0" rx="3" ry="3" width="230" height="150" />
    <rect x="560" y="0" rx="3" ry="3" width="230" height="150" />
    <rect x="840" y="0" rx="3" ry="3" width="230" height="150" />
    <rect x="1120" y="0" rx="3" ry="3" width="230" height="150" />

    {/* buttons */}
    <rect x="20" y="200" rx="3" ry="3" width="40" height="40" />
    <rect x="80" y="200" rx="3" ry="3" width="40" height="40" />

    {/* page selector */}
    <circle cx="1120" cy="220" r="20" />
    <rect x="1120" y="200" rx="0" ry="0" width="200" height="40" />
    <circle cx="1320" cy="220" r="20" />

    {/* search */}
    <circle cx="890" cy="220" r="20" />
    <rect x="890" y="200" rx="0" ry="0" width="140" height="40" />
    <circle cx="1032" cy="220" r="20" />

    {/* table header */}
    <rect x="3" y="260" rx="3" ry="3" width="1350" height="17" />
    <rect x="3" y="300" rx="3" ry="3" width="1350" height="17" />

    <rect x="3" y="270" rx="3" ry="3" width="25" height="33" />
    <rect x="134" y="270" rx="3" ry="3" width="80" height="33" />
    <rect x="500" y="270" rx="3" ry="3" width="80" height="33" />
    <rect x="700" y="270" rx="3" ry="3" width="80" height="33" />
    <rect x="900" y="270" rx="3" ry="3" width="80" height="33" />
    <rect x="1100" y="270" rx="3" ry="3" width="80" height="33" />
    <rect x="1300" y="270" rx="3" ry="3" width="53" height="33" />

    {/* table y-axis border */}
    <rect x="3" y="312" rx="3" ry="3" width="2" height="465" />
    <rect x="1350" y="312" rx="3" ry="3" width="2" height="465" />

    {/* row 1 */}
    <rect x="30" y="340" rx="3" ry="3" width="100" height="15" />
    <rect x="215" y="340" rx="3" ry="3" width="285" height="15" />
    <rect x="580" y="340" rx="3" ry="3" width="141" height="15" />
    <rect x="780" y="340" rx="3" ry="3" width="141" height="15" />
    <rect x="980" y="340" rx="3" ry="3" width="141" height="15" />
    <rect x="1180" y="340" rx="3" ry="3" width="141" height="15" />
    <rect x="3" y="375" rx="3" ry="3" width="1350" height="2" />

    {/* row 2 */}
    <rect x="30" y="400" rx="3" ry="3" width="100" height="15" />
    <rect x="215" y="400" rx="3" ry="3" width="285" height="15" />
    <rect x="580" y="400" rx="3" ry="3" width="141" height="15" />
    <rect x="780" y="400" rx="3" ry="3" width="141" height="15" />
    <rect x="980" y="400" rx="3" ry="3" width="141" height="15" />
    <rect x="1180" y="400" rx="3" ry="3" width="141" height="15" />
    <rect x="3" y="435" rx="3" ry="3" width="1350" height="2" />

    {/* row 3 */}
    <rect x="30" y="460" rx="3" ry="3" width="100" height="15" />
    <rect x="215" y="460" rx="3" ry="3" width="285" height="15" />
    <rect x="580" y="460" rx="3" ry="3" width="141" height="15" />
    <rect x="780" y="460" rx="3" ry="3" width="141" height="15" />
    <rect x="980" y="460" rx="3" ry="3" width="141" height="15" />
    <rect x="1180" y="460" rx="3" ry="3" width="141" height="15" />
    <rect x="3" y="495" rx="3" ry="3" width="1350" height="2" />

    {/* row 3 */}
    <rect x="30" y="520" rx="3" ry="3" width="100" height="15" />
    <rect x="215" y="520" rx="3" ry="3" width="285" height="15" />
    <rect x="580" y="520" rx="3" ry="3" width="141" height="15" />
    <rect x="780" y="520" rx="3" ry="3" width="141" height="15" />
    <rect x="980" y="520" rx="3" ry="3" width="141" height="15" />
    <rect x="1180" y="520" rx="3" ry="3" width="141" height="15" />
    <rect x="3" y="555" rx="3" ry="3" width="1350" height="2" />
  </ContentLoader>
);

export default DashboardLoader;
