import CoreNLP from '../src';

// Simple (https://stanfordnlp.github.io/CoreNLP/simple.html)

const props = new CoreNLP.Properties();
props.setProperty('annotators', 'tokenize,ssplit,pos,lemma,ner,parse');
const pipeline = new CoreNLP.Pipeline(props, 'English');

const sent = new CoreNLP.simple.Sentence('The little dog runs so fast.');
pipeline.annotate(sent)
  .then((sent) => {
    console.log('parse', sent.parse());
    console.log(CoreNLP.util.Tree.fromSentence(sent).dump());
  })
  .catch(err => {
    console.log('err', err);
  });
