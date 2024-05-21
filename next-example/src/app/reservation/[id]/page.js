import Btn from '../../../components/Btn';
export default function ReservationId({ params }) {
  return (
    <>
      <h1>Hello {params.id}</h1>
      <Btn></Btn>
    </>
  );
}
