import Btn from '../../../components/Btn';
import { setReservation } from '../action';
export default async function ReservationId() {
  return (
    <>
      <h1>Hello</h1>
      <Btn asyncProps={setReservation}></Btn>
    </>
  );
}
