import { NextPage } from 'next';
import { useRouter } from 'next/router';

const WikiDetail: NextPage = () => {
  const router = useRouter();

  return <div>post detail number: {router.query.slug}</div>;
};

export default WikiDetail;
