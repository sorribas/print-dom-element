var applyStyle = function(iframe) {
  iframe.style.border = 'none';
  iframe.style.position = 'absolute';
  iframe.style.width = '0px';
  iframe.style.height = '0px';
  iframe.style.bottom = '0px';
  iframe.style.left = '0px';
};

var print = function(el) {
  var iframe = document.createElement('iframe');
  applyStyle(iframe);

  document.body.appendChild(iframe);
  var doc = (iframe.contentWindow || iframe.contentDocument);
  if (doc.document) doc = doc.document;

  var html = '<html><head><body>';
  html += '<script type="text/javascript">function printPg() {focus(); print();}</script>';
  html += el.innerHTML;
  html += '</body></head></html>';

  doc.open();
  doc.write(html);
  doc.close();

  var elToPrint = iframe.contentWindow || iframe;
  elToPrint['printPg']();
};

module.exports = print;
