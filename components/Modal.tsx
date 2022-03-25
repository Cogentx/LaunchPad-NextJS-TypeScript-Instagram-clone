import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtoms';

export default function Modal() {
  const [open, setOpen] = useRecoilState(modalState);

  return <div>Modal</div>;
}
