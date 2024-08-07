import React, { useEffect, useState } from 'react';

const EbookSignupSection: React.FC = () => {
  const [showDownloadLink, setShowDownloadLink] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      window.fnames = new Array();
      // @ts-ignore
      window.ftypes = new Array();
      // @ts-ignore
      fnames[0]='EMAIL';
      // @ts-ignore
      ftypes[0]='email';
      // @ts-ignore
      fnames[1]='FNAME';
      // @ts-ignore
      ftypes[1]='text';
      // @ts-ignore
      fnames[2]='LNAME';
      // @ts-ignore
      ftypes[2]='text';

      // Add the validation messages here (omitted for brevity)
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const form = document.getElementById('mc-embedded-subscribe-form') as HTMLFormElement;
    const successResponse = document.getElementById('mce-success-response');

    if (form && successResponse) {
      const observer = new MutationObserver(() => {
        if (successResponse.style.display !== 'none') {
          setShowDownloadLink(true);
        }
      });

      observer.observe(successResponse, { attributes: true, attributeFilter: ['style'] });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold mb-4 text-primary">Receba Seu Brinde Exclusivo</h2>
        <p className="mb-4">Quer ter mais clareza e foco para realizar seus sonhos?</p>
        <p className="mb-4">Escreva sobre como seu sonho realizado irá afetar a vida de diferentes pessoas. </p>
        <p className="mb-4">Tenha claro seus "porquês"! Baixe aqui o Quadrante dos Porquês"</p>


        
        <ul className="mb-4 list-disc list-inside">
          <li>Insira seu e-mail no campo abaixo.</li>
          <li>Clique em "Baixar".</li>
        </ul>
        <div id="mc_embed_shell">
          <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
          <style type="text/css">
            {`
              #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
            `}
          </style>
          <div id="mc_embed_signup">
            <form action="https://oxitocinas.us2.list-manage.com/subscribe/post?u=be5126c710d64844407103aac&amp;id=2fcd94968d&amp;f_id=00cb68e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
              <div id="mc_embed_signup_scroll">
                <h2 className=''>Inscrever</h2>
                <div className="indicates-required"><span className="asterisk">*</span> indica obrigatório</div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">Email <span className="asterisk">*</span></label>
                  <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-FNAME">Nome </label>
                  <input type="text" name="FNAME" className="text" id="mce-FNAME" />
                </div>
                <div id="mce-responses" className="clear foot">
                  <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                  <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                </div>
                <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                  <input type="text" name="b_be5126c710d64844407103aac_2fcd94968d" tabIndex={-1} />
                </div>
                <div className="optionalParent">
                  <div className="clear foot">
                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Baixar" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {showDownloadLink && (
          <div className="mt-4">
            <p>Obrigado por se inscrever! Clique no link abaixo para baixar seu e-book:</p>
            <a 
              href="/assets/docs/Quadrante dos porquês.pdf" 
              download 
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Baixar E-book
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default EbookSignupSection;
