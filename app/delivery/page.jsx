import { DeliveryHero } from "@/features/delivery/components/DeliveryHero";
import { DeliveryHighlights } from "@/features/delivery/components/DeliveryHighlights";
import { DeliveryTable } from "@/features/delivery/components/DeliveryTable";
import { DeliveryMap } from "@/features/delivery/components/DeliveryMap";
import "./Delivery.scss";


export default function Delivery() {
  return (
    <div className="delivery-info">
      <DeliveryHero />
      <DeliveryHighlights />
      <DeliveryTable />
      <DeliveryMap />
    </div>
  );
}