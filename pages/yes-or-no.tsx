import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import Layout from '@/components/Layout';

type YesOrNoApiResponse = {
  data: 'yes' | 'no';
};

const fetchResult = async () => {
  const res = await fetch('https://platzi-avo.vercel.app/api/yes-or-no');
  const { data }: YesOrNoApiResponse = await res.json();

  return data;
};

export async function getServerSideProps() {
  const initialResult = await fetchResult();

  return {
    props: {
      initialResult,
    },
  };
}

const YesOrNo = ({ initialResult }: { initialResult: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(initialResult);
  const [triggerCount, setTriggerCount] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetchResult().then((initialResult) => {
      setResult(initialResult);
      setIsLoading(false);
    });
  }, [triggerCount]);

  const onClick = async () => {
    setTriggerCount(triggerCount + 1);
  };

  return (
    <Layout>
      <div className="text-center">
        <h1
          className={`text-${isLoading ? 'gray' : 'green'} text-7xl uppercase`}
        >
          {result}
        </h1>

        <p>
          <button
            className={`bg-green-500 text-white px-4 py-2 rounded ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={onClick}
            disabled={isLoading}
          >
            Intentar de nuevo
          </button>
        </p>
        <p>
          <Link href="/">
            <a className="text-black hover:text-gray-800 underline">
              Volver al inicio
            </a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default YesOrNo;