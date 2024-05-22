import Btn from '../../../components/Btn';
import { setData } from './action';
export default async function ReservationId() {
  return (
    <>
      <h1>Hello</h1>
      <Btn asyncProps={setData}></Btn>
    </>
  );
}
