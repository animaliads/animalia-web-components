(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    1004: function (module, exports) {},
    1007: function (module, exports) {},
    1016: function (module, exports, __webpack_require__) {
      'use strict';
      (function (module) {
        (0, __webpack_require__(125).configure)(
          [__webpack_require__(1017), __webpack_require__(1029)],
          module,
          !1
        );
      }.call(this, __webpack_require__(71)(module)));
    },
    1017: function (module, exports, __webpack_require__) {
      var map = {
        './packages/button/src/stories/button.stories.mdx': 1033,
        './packages/link/src/link.stories.mdx': 1022,
        './stories/changelog.stories.mdx': 1042,
        './stories/design-principles.stories.mdx': 1023,
        './stories/getting-started.stories.mdx': 1024,
        './stories/guideline/colors/best-practices.stories.mdx': 1025,
        './stories/guideline/colors/colors-tokens.stories.mdx': 1026,
        './stories/guideline/colors/colors.stories.mdx': 1034,
        './stories/guideline/typography/typography-tokens.stories.mdx': 1027,
        './stories/guideline/typography/typography.stories.mdx': 1031,
        './stories/home.stories.mdx': 1028,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1017);
    },
    1022: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(8),
        __webpack_require__(9),
        __webpack_require__(12),
        __webpack_require__(16),
        __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          5
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(
            _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
          )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.e, {
            title: 'Componentes/Link',
            mdxType: 'Meta',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h1',
            { id: 'link' },
            'Link'
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Componentes/Link',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    1023: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(8),
        __webpack_require__(9),
        __webpack_require__(12),
        __webpack_require__(16),
        __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          5
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(
            _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
          )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.e, {
            title: 'Princípios',
            parameters: { previewTabs: { canvas: { hidden: !0 } } },
            mdxType: 'Meta',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h1',
            { id: 'princípios-do-animalia' },
            'Princípios do Animalia'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Os princípios são nossa direção, são eles que orientam todas as diretrizes e decisões em relação ao design system e a tudo que ele entrega. Os princípios do ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'strong',
              { parentName: 'p' },
              'Animalia DS'
            ),
            ' são:'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h3',
            { id: 'ser-acessível-e-inclusivo' },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'strong',
              { parentName: 'h3' },
              'Ser acessível e inclusivo'
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Queremos incentivar a acessibilidade e inclusão e por isso temos a responsabilidade de garantir que nossas aplicações sejam acessíveis e inclusivas desde a pesquisa dos componentes, passando pelo desenvolvimento do código até a utilização do usuário final.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h3',
            { id: 'ser-colaborativo' },
            'Ser colaborativo'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Defendemos a colaboração, por isso somos código aberto (open source) e desenvolvemos nossos recursos de forma abrangente o suficiente para atender as necessidades dos usuários de vários segmentos institucionais.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h3',
            { id: 'impulsionar-negócios' },
            'Impulsionar negócios'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Nossas decisões têm como foco a utilização dos componentes em aplicações para o mercado corporativo. Queremos criar consistência para o cliente e com isso direcionar o foco das equipes para o negócio.'
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Princípios',
          parameters: { previewTabs: { canvas: { hidden: !0 } } },
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    1024: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(8),
        __webpack_require__(9),
        __webpack_require__(12),
        __webpack_require__(16),
        __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          5
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(
            _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
          )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.e, {
            title: 'Começando',
            parameters: { previewTabs: { canvas: { hidden: !0 } } },
            mdxType: 'Meta',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h1',
            { id: 'começando' },
            'Começando'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Este guia tem finalidade de orientar sobre a instalação e utilização dos componentes.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Os componentes do Animalia DS são construídos utilizando a tecnologia Web Components,\nque consiste em criar elementos customizáveis utilizando apenas Javascript e HTML, podendo\ndesta forma ser utilizado por aplicações contendo diversas tecnologias web, sendo assim uma\nbiblioteca de componentes agnóstica.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h2',
            { id: 'pré-requisitos' },
            'Pré requisitos'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Para usar a biblioteca Animalia DS, você precisa ter familiaridade com:'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'a',
                {
                  parentName: 'li',
                  href:
                    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                'Javascript'
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'a',
                {
                  parentName: 'li',
                  href:
                    'https://developer.mozilla.org/docs/Learn/HTML/Introduction_to_HTML',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                'HTML'
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'a',
                {
                  parentName: 'li',
                  href:
                    'https://developer.mozilla.org/docs/Learn/CSS/First_steps',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                'CSS'
              )
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'E para a instalação local no seu computador, precisará ter instalado:'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'a',
                {
                  parentName: 'li',
                  href: 'https://nodejs.org/en/',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                'Node.js'
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'a',
                {
                  parentName: 'li',
                  href: 'https://docs.npmjs.com/getting-started/what-is-npm',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                'NPM'
              )
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h2',
            { id: 'instalação' },
            'Instalação'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Instale o pacote via npm:'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'code',
              { parentName: 'pre' },
              'npm install @animaliads/animalia-web-components\n'
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Se preferir, você também pode instalar o componente de forma individual:'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'code',
              { parentName: 'pre' },
              'npm install @animaliads/ani-button\n'
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h2',
            { id: 'como-usar' },
            'Como usar'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Adicione o arquivo instalado no seu código ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'inlineCode',
              { parentName: 'p' },
              'html'
            ),
            ':'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'code',
              { parentName: 'pre' },
              '<script type="module" src="./node_modules/@animaliads/web-components"></script>\n'
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('a', {
            id: 'angular',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h3',
            { id: 'angular' },
            'Angular'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Para utilizar o web component, você precisará adicionar o ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'inlineCode',
              { parentName: 'p' },
              'CUSTOM_ELEMENTS_SCHEMA'
            ),
            ' no módulo da sua aplicação.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'code',
              { parentName: 'pre', className: 'language-javascript' },
              "import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\n\n@NgModule({\n  imports: [CommonModule],\n  declarations: [PageComponent],\n  exports: [PageComponent],\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n})\nexport class PageModule {}\n"
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Você também precisará importar o pacote dentro do seu componente:'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'code',
              { parentName: 'pre' },
              "import '@animaliads/web-components';\n"
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Começando',
          parameters: { previewTabs: { canvas: { hidden: !0 } } },
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    1025: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(8),
        __webpack_require__(9),
        __webpack_require__(12),
        __webpack_require__(16),
        __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          5
        ),
        _img_best_practices_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          537
        ),
        _img_best_practices_svg__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _img_best_practices_svg__WEBPACK_IMPORTED_MODULE_7__
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(
            _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
          )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.e, {
            title: 'Guia de estilo/Cores/Boas práticas',
            parameters: { previewTabs: { canvas: { hidden: !0 } } },
            mdxType: 'Meta',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h1',
            { id: 'cores-boas-práticas' },
            'Cores: Boas práticas'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Mais do que carregar expressividade e fazer conexão com a marca a qual representa, as cores utilizadas na interface assumem diversos papéis que auxiliam na compreensão das informações que estão sendo apresentadas, dentre eles:'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Indicar o que é ou não interativo na interface'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Mostrar uma mudança de estado do componente (hover, selecionado, etc)'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Ajudar na localização, indicando ao usuário onde ele está'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Indicar se algo está habilitado ou desabilitado'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Cria hierarquia nas informações (mais importante, menos importante)'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Dar um feedback visual para a ação executada, como sucesso ou erro'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Distinguir um tipo de informação'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Dar o tom da informação (cuidado, ajuda..)'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Informar um status (disponível, reservado...)'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Categorizar/ identificar (legendas, gráficos)'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Dividir ou delimitar uma área de conteúdo'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Indicar um progresso'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'etc...'
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'A cor tem múltiplas facetas e é altamente influenciável pelo contexto. Essa versatilidade depende justamente de como, onde e quando está sendo usada.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Isoladamente, a cor não tem todo esse poder — e nem deve ser o único recurso para transmitir uma informação. Mas a cor, somada à outros atributos, pode sim ser um importante recurso para potencializar a função desejada e guiar o usuário.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h2',
            { id: 'todo-mundo-ganha' },
            'Todo mundo ganha'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Usabilidade e acessibilidade são parceiras fortíssimas. Boas práticas no uso de cor em interface quando o assunto é acessibilidade, traz uma melhor usabilidade para todo mundo.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Quando a cor é usada em excesso na interface, nada se destaca e a usabilidade fica prejudicada.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'O exercício é aprender a dosar a cor e sempre usá-la com intenção.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Um recurso que pode ajudar a distribuir as cores no layout, é a regra de proporção conhecida como 60-30-10, sendo:'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              '60% cor predominante'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              '30% cor de apoio'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              '10% a cor de destaque'
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
            src: _img_best_practices_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
            alt:
              'Exemplo de distribuição de cores no layout, seguindo a regra 60-30-10',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Estes não são valores rígidos, até porque é difícil precisar o quanto tem de cada cor no layout. A ideia é mais ser uma referência para se ter em mente quando estamos aplicando cores aos elementos da interface.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'strong',
              { parentName: 'p' },
              'Algumas recomendações de acessibilidade para uso da cor:'
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Ter um bom contraste entre cor texto e cor de fundo. A taxa de contraste (',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'em',
                { parentName: 'li' },
                'contrast ratio'
              ),
              ') mínima é 4.5: 1, medida através de verificadores, como o ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'a',
                {
                  parentName: 'li',
                  href: 'https://whocanuse.com/',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                'Who Can Use'
              ),
              ';'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Outros componentes da interface também precisam ter contraste, como é o caso dos controles e ícones. Nesses elementos, o mínimo de contraste exigido pela WCAG é 3: 1;'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Não usar as cores como a única maneira de transmitir uma informação ou distinguir elementos. Dependendo do contexto, pode-se utilizar textos, ícones, fonte em peso diferente, sublinhado, entre outros recursos;'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Dar preferência a cores menos saturadas, pois cores com alta saturação são agressivas aos olhos, principalmente quando utilizadas em fundos;'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Evite usar textos em preto 100% (#000), pois o contraste extremo também é incômodo;'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              'Usar as cores com propósito, como um apoio para a guiar a atenção, diferenciar elementos ou relacioná-los'
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            '(Fontes: Gaia, ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                parentName: 'p',
                href: 'https://gaia.wiki.br/vocabulario-visual-e-textual/cores',
                target: '_blank',
                rel: 'nofollow noopener noreferrer',
              },
              'recomendação G01'
            ),
            '/ WCAG, critérios ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                parentName: 'p',
                href: 'https://www.w3.org/TR/WCAG21/#use-of-color',
                target: '_blank',
                rel: 'nofollow noopener noreferrer',
              },
              '1.4.1'
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                parentName: 'p',
                href: 'https://www.w3.org/TR/WCAG21/#contrast-minimum',
                target: '_blank',
                rel: 'nofollow noopener noreferrer',
              },
              '1.4.3'
            ),
            ' e ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                parentName: 'p',
                href: 'https://www.w3.org/TR/WCAG21/#non-text-contrast',
                target: '_blank',
                rel: 'nofollow noopener noreferrer',
              },
              '1.4.11'
            ),
            ' / ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'a',
              {
                parentName: 'p',
                href: 'https://www.alura.com.br/curso-online-acessibilidade-ux',
                target: '_blank',
                rel: 'nofollow noopener noreferrer',
              },
              'curso de acessibilidade Alura'
            ),
            ')'
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Guia de estilo/Cores/Boas práticas',
          parameters: { previewTabs: { canvas: { hidden: !0 } } },
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    1026: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(8),
        __webpack_require__(9),
        __webpack_require__(12),
        __webpack_require__(16),
        __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          5
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(
            _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
          )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.e, {
            title: 'Guia de estilo/Cores/Design Tokens',
            parameters: { previewTabs: { canvas: { hidden: !0 } } },
            mdxType: 'Meta',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h1',
            { id: 'cores-design-tokens' },
            'Cores: Design Tokens'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Aqui estão listados os ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'em',
              { parentName: 'p' },
              'global tokens'
            ),
            ' referentes às cores de feedback e seus respectivos valores em hexadecimal.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h2',
            { id: 'positive' },
            'Positive'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.c,
            { mdxType: 'ColorPalette' },
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-positive-lightest',
              colors: ['#DEF7ED'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-positive-lighter',
              colors: ['#7ECEAD'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-positive-light',
              colors: ['#41B483'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-positive-base',
              colors: ['#107048'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-positive-dark',
              colors: ['#0F5236'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-positive-darker',
              colors: ['#083A25'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-positive-darkest',
              colors: ['#002415'],
              mdxType: 'ColorItem',
            })
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h2',
            { id: 'negative' },
            'Negative'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.c,
            { mdxType: 'ColorPalette' },
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-negative-lightest',
              colors: ['#F6E6E5'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-negative-lighter',
              colors: ['#E3AEAB'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-negative-light',
              colors: ['#D58581'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-negative-base',
              colors: ['#BE3E37'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-negative-dark',
              colors: ['#9B2D27'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-negative-darker',
              colors: ['#72211D'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-negative-darkest',
              colors: ['#4A1512'],
              mdxType: 'ColorItem',
            })
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h2',
            { id: 'warning' },
            'Warning'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.c,
            { mdxType: 'ColorPalette' },
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-warning-lightest',
              colors: ['#FCF6E3'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-warning-lighter',
              colors: ['#F7DD97'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-warning-light',
              colors: ['#F1CD6A'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-warning-base',
              colors: ['#EFBA2A'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-warning-dark',
              colors: ['#D8A20E'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-warning-darker',
              colors: ['#705200'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-warning-darkest',
              colors: ['#473400'],
              mdxType: 'ColorItem',
            })
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h2',
            { id: 'info' },
            'Info'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.c,
            { mdxType: 'ColorPalette' },
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-info-lightest',
              colors: ['#E3E9F7'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-info-lighter',
              colors: ['#B0C1E8'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-info-light',
              colors: ['#7996D7'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-info-base',
              colors: ['#23489F'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-info-dark',
              colors: ['#173782'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-info-darker',
              colors: ['#0F2557'],
              mdxType: 'ColorItem',
            }),
            Object(
              _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
            )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.b, {
              title: '--color-feedback-info-darkest',
              colors: ['#081536'],
              mdxType: 'ColorItem',
            })
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'p',
              { parentName: 'blockquote' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'strong',
                { parentName: 'p' },
                'NOTA:'
              ),
              ' Importante ressaltar que o grupo de cores para feedback requer uma maior atenção no contraste entre os elementos para garantir que a informação não está sendo prejudicada.\nEspecial atenção ao utilizar ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'inlineCode',
                { parentName: 'p' },
                '--color-feedback-warning'
              ),
              ' para aplicações em mensagens de alerta e ícones, pois o amarelo possui baixíssimo contraste sobre fundo claro.'
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Guia de estilo/Cores/Design Tokens',
          parameters: { previewTabs: { canvas: { hidden: !0 } } },
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    1027: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(8),
        __webpack_require__(9),
        __webpack_require__(12),
        __webpack_require__(16),
        __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          5
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(
            _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
          )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.e, {
            title: 'Guia de estilo/Tipografia/Design tokens',
            parameters: { previewTabs: { canvas: { hidden: !0 } } },
            mdxType: 'Meta',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h1',
            { id: 'tipografia-design-tokens' },
            'Tipografia: Design tokens'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'strong',
              { parentName: 'p' },
              'Legenda'
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'strong',
                { parentName: 'li' },
                'global'
              ),
              ' = token básico, comum à todos'
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'li',
              { parentName: 'ul' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'strong',
                { parentName: 'li' },
                'brand'
              ),
              ' = específico de cada marca, disponível de acordo com a necessidade'
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h2',
            { id: 'font-family' },
            'Font family'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'table',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'thead',
              { parentName: 'table' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'thead' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Token'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Camada DS'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Uso'
                )
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'tbody',
              { parentName: 'table' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-family-heading'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Títulos e chamadas'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-family-text'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Textos em geral, labels, placeholders, legendas, etc'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-family-code'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Trechos de código em documentação técnica'
                )
              )
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h2',
            { id: 'font-size' },
            'Font size'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'table',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'thead',
              { parentName: 'table' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'thead' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Token'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Valor (rem)'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Valor (pixel)'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Camada DS'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Descrição'
                )
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'tbody',
              { parentName: 'table' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-size-xs'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '0.75'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '12px'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('td', {
                  parentName: 'tr',
                  align: null,
                })
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-size-sm'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '0.875'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '14px'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('td', {
                  parentName: 'tr',
                  align: null,
                })
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-size-default'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '1'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '16px'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Base da escala'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-size-md'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '1.25'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '20px'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('td', {
                  parentName: 'tr',
                  align: null,
                })
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-size-lg'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '1.5'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '24px'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('td', {
                  parentName: 'tr',
                  align: null,
                })
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-size-xl'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '2'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '32px'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('td', {
                  parentName: 'tr',
                  align: null,
                })
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-size-2xl'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '2.5'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '40px'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('td', {
                  parentName: 'tr',
                  align: null,
                })
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-size-3xl'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '3'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '48px'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('td', {
                  parentName: 'tr',
                  align: null,
                })
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-size-2xs'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '0.625'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '10px'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Deve ser utilizado em casos restritos, em conjunto com o modificador uppercase'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-size-4xl'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '3.75'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '60px'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('td', {
                  parentName: 'tr',
                  align: null,
                })
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-size-5xl'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '4.75'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '76px'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('td', {
                  parentName: 'tr',
                  align: null,
                })
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-size-6xl'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '6'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '96px'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('td', {
                  parentName: 'tr',
                  align: null,
                })
              )
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'p',
              { parentName: 'blockquote' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'strong',
                { parentName: 'p' },
                'NOTA:'
              ),
              ' As ferramentas de design voltadas para interface utilizam pixel como unidade. Mas no desenvolvimento é importante considerar as medidas relativas (',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'strong',
                { parentName: 'p' },
                'rem'
              ),
              '), pois valores fixos podem prejudicar a acessibilidade.'
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h2',
            { id: 'font-weight' },
            'Font-weight'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'table',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'thead',
              { parentName: 'table' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'thead' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Token'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Valor'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Camada DS'
                )
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'tbody',
              { parentName: 'table' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-weight-thin'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '100'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-weight-extra-light'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '200'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-weight-light'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '300'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-weight-normal'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '400'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-weight-medium'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '500'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-weight-semibold'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '600'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-weight-bold'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '700'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-weight-extrabold'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '800'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'font-weight-heavy'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '900'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                )
              )
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h2',
            { id: 'line-height' },
            'Line-height'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'table',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'thead',
              { parentName: 'table' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'thead' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Token'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Valor'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Referência (em)'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Camada DS'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Uso em texto'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Uso em componente'
                )
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'tbody',
              { parentName: 'table' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'line-height-none'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '100%'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '1.0'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '-'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Quando for necessário ter line-height = font-size'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'line-height-sm'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '140%'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '1.4'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'font-size 4xl, 5xl, 6xl'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'A avaliar'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'line-height-md'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '150%'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '1.5'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'font-size default, xl, 2xl, 3xl'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'A avaliar'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'line-height-lg'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '160%'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '1.6'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'font-size sm, xs, 2xs'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'A avaliar'
                )
              )
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h2',
            { id: 'letterspacing' },
            'Letterspacing'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'table',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'thead',
              { parentName: 'table' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'thead' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Token'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Valor'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Camada DS'
                )
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'tbody',
              { parentName: 'table' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'letter-spacing-auto'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'auto'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'letter-spacing-1'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '0.15'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'letter-spacing-2'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '0.25'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'letter-spacing-3'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '0.5'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'letter-spacing-4'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '1.25'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'letter-spacing-5'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '1.5'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'letter-spacing-neg-1'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '-0.15'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'letter-spacing-neg-2'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '-0.25'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'letter-spacing-neg-3'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '-0.5'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'letter-spacing-neg-4'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '-1.25'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'letter-spacing-neg-5'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  '-1.5'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'global'
                )
              )
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h2',
            { id: 'transform' },
            'Transform'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'table',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'thead',
              { parentName: 'table' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'thead' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Token'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Valor'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Camada DS'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Descrição'
                )
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'tbody',
              { parentName: 'table' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'text-transform-normal'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'normal'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Formatação padrão da fonte, sem nenhuma modificação'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'text-transform-uppercase'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'uppercase'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Todas as letras maiúsculas'
                )
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'tr',
                { parentName: 'tbody' },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    'text-transform-numtab'
                  )
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'numtab'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'brand'
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Números tabulares, com caracteres ocupando a mesma largura'
                )
              )
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Guia de estilo/Tipografia/Design tokens',
          parameters: { previewTabs: { canvas: { hidden: !0 } } },
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    1028: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(8),
        __webpack_require__(9),
        __webpack_require__(12),
        __webpack_require__(16),
        __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          5
        ),
        _assets_animalia_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          557
        ),
        _assets_animalia_png__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _assets_animalia_png__WEBPACK_IMPORTED_MODULE_7__
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(
            _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b
          )(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.e, {
            title: 'Página inicial',
            parameters: { previewTabs: { canvas: { hidden: !0 } } },
            mdxType: 'Meta',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h1',
            { id: 'animalia-design-system' },
            'Animalia Design System'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)('img', {
            src: _assets_animalia_png__WEBPACK_IMPORTED_MODULE_7___default.a,
            alt:
              'Ilustração de um grupo de animais sendo uma onça ao centro com 3 outros animais em suas costas',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h2',
            { id: 'o-que-é-o-animalia-ds' },
            'O que é o Animalia DS?'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'O ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'strong',
              { parentName: 'p' },
              'Animalia DS'
            ),
            ' – ou ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'em',
              { parentName: 'p' },
              'Animalia Design System'
            ),
            ' – é o design system ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'em',
              { parentName: 'p' },
              'open source'
            ),
            ' da TOTVS, que nasceu com o objetivo de melhorar a performance no desenvolvimento de aplicações corporativas, facilitando a comunicação entre designers e desenvolvedores, com uma documentação prática de componentes que garanta uma melhor usabilidade para os clientes.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Nosso intuito é possibilitar que as equipes se concentrem em suas regras de negócio e consigam direcionar seus esforços para impulsionar os produtos.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'h3',
            { id: 'por-que-animalia' },
            'Por que Animalia?'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'em',
              { parentName: 'p' },
              'Animalia,'
            ),
            ' ou ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'em',
              { parentName: 'p' },
              'Metazoa,'
            ),
            ' é o nome do Reino Animal na biologia, composto por seres vivos pluricelulares, cujas células formam tecidos biológicos com capacidade de responder ao ambiente que os envolve. Engloba anfíbios, répteis, aves, moluscos, insetos, mamíferos, etc – ou seja, animais que possuem várias características em comum, mas também são muito diferentes entre si, com características específicas para as necessidades do ambiente em que vivem.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'strong',
              { parentName: 'p' },
              'Animalia DS'
            ),
            ' soou apropriado para um design system nascendo em um ambiente tão complexo e diverso quanto a TOTVS, que requer coerência mas também flexibilidade para se adaptar aos mais diversos cenários.'
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            'p',
            null,
            'Faz parte desse ecossistema o ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'strong',
              { parentName: 'p' },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                'a',
                {
                  parentName: 'strong',
                  href: 'https://po-ui.io/',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                'PO-UI, que é uma biblioteca instalável baseada em Angular'
              )
            ),
            '. Seu nome homenageia a onça-pintada (',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'em',
              { parentName: 'p' },
              'Panthera Onca'
            ),
            ') e tem suas características próprias, como seu foco em alta produtividade no desenvolvimento de produtos, componentes complexos e customizações em ERPs. Ou seja, é uma das partes que compõe o ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              'strong',
              { parentName: 'p' },
              'Animalia'
            ),
            '.'
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Página inicial',
          parameters: { previewTabs: { canvas: { hidden: !0 } } },
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    1029: function (module, exports, __webpack_require__) {
      var map = { './packages/button/src/stories/button.stories.ts': 1030 };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1029);
    },
    1030: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Sample', function () {
          return Sample;
        });
      __webpack_require__(325),
        __webpack_require__(54),
        __webpack_require__(179),
        __webpack_require__(143),
        __webpack_require__(12),
        __webpack_require__(16),
        __webpack_require__(67),
        __webpack_require__(18),
        __webpack_require__(41),
        __webpack_require__(8),
        __webpack_require__(512),
        __webpack_require__(20),
        __webpack_require__(516);
      var _templateObject,
        lit_html__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21);
      var __rest = function (s, e) {
          var t = {};
          for (var p in s)
            Object.prototype.hasOwnProperty.call(s, p) &&
              e.indexOf(p) < 0 &&
              (t[p] = s[p]);
          if (null != s && 'function' == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (p = Object.getOwnPropertySymbols(s); i < p.length; i++)
              e.indexOf(p[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(s, p[i]) &&
                (t[p[i]] = s[p[i]]);
          }
          return t;
        },
        customPropertiesArgs = [
          { name: '--font-family', description: 'nome da família de fonte' },
          { name: '--text-color', description: 'cor do texto da label' },
          { name: '--font-size', description: 'tamanho da fonte' },
          { name: '--line-height', description: 'espaçamento entre linhas' },
          { name: '--background', description: 'cor de background' },
          { name: '--border-radius', description: 'arredondamento da borda' },
          {
            name: '--spacing-squish',
            description: 'espaçamento interno (padding)',
          },
          {
            name: '--background-hover',
            description: 'cor de background no evento hover',
          },
          {
            name: '--outline-color-focused',
            description: 'cor da borda externa durante o focus',
          },
          {
            name: '--outline-color-pressed',
            description: 'cor da borda externa durante o pressed',
          },
          {
            name: '--outline-color-disabled',
            description:
              'cor da borda externa quando o botão estiver desabilitado',
          },
          {
            name: '--background-pressed',
            description: 'cor do background durante o pressed',
          },
          {
            name: '--background-disabled',
            description:
              'cor do background quando o botão estiver desabilitado',
          },
          { name: '--shadow', description: 'propriedades de sombra' },
        ].reduce(function (acc, propertie) {
          var newValue = (function _defineProperty(obj, key, value) {
            return (
              key in obj
                ? Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (obj[key] = value),
              obj
            );
          })({}, propertie.name, {
            description: propertie.description,
            table: { category: 'Propriedades customizáveis (CSS)' },
          });
          return Object.assign(Object.assign({}, acc), newValue);
        }, {});
      __webpack_exports__.default = {
        title: 'API/Button',
        component: 'ani-button',
        argTypes: Object.assign(
          {
            label: {
              control: 'text',
              description: 'Rótulo',
              table: { category: 'Slot' },
            },
            disabled: {
              control: 'boolean',
              description: 'Indica se o botão está desabilitado',
              defaultValue: 'false',
              table: { category: 'Propriedades' },
            },
            onClick: {
              description: 'Evento disparado ao clicar no botão',
              table: { category: 'Eventos' },
            },
          },
          customPropertiesArgs
        ),
      };
      var Sample = function Template(_a) {
        var label = _a.label,
          args = __rest(_a, ['label']);
        return Object(lit_html__WEBPACK_IMPORTED_MODULE_13__.b)(
          _templateObject ||
            (_templateObject = (function _taggedTemplateLiteral(strings, raw) {
              return (
                raw || (raw = strings.slice(0)),
                Object.freeze(
                  Object.defineProperties(strings, {
                    raw: { value: Object.freeze(raw) },
                  })
                )
              );
            })(['\n    <ani-button disabled="', '"> ', ' </ani-button>\n  '])),
          args.disabled,
          label
        );
      }.bind({});
      (Sample.args = { label: 'Button', disabled: !1 }),
        (Sample.parameters = {
          docs: {
            source: {
              code: '\n<ani-button\n  disabled="'
                .concat(Sample.args.disabled, '"\n>\n')
                .concat(Sample.args.label, '\n</ani-button>'),
            },
          },
        }),
        (Sample.parameters = Object.assign(
          {
            storySource: {
              source:
                '({ label, ...args }) => {\n  return html`\n    <ani-button disabled="${args.disabled}"> ${label} </ani-button>\n  `;\n}',
            },
          },
          Sample.parameters
        ));
    },
    1031: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'introducao', function () {
          return typography_stories_introducao;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'familiaTipografica',
          function () {
            return typography_stories_familiaTipografica;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'tamanhosEEscala',
          function () {
            return typography_stories_tamanhosEEscala;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'variacoesDePesos',
          function () {
            return typography_stories_variacoesDePesos;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'espacoEntrelinhas',
          function () {
            return typography_stories_espacoEntrelinhas;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'espacoEntreCaracteres',
          function () {
            return typography_stories_espacoEntreCaracteres;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'modificacoesEmTexto',
          function () {
            return typography_stories_modificacoesEmTexto;
          }
        );
      __webpack_require__(16),
        __webpack_require__(54),
        __webpack_require__(179),
        __webpack_require__(143),
        __webpack_require__(8),
        __webpack_require__(9),
        __webpack_require__(12),
        __webpack_require__(1);
      var esm = __webpack_require__(0),
        blocks = __webpack_require__(5),
        lit_html = __webpack_require__(21),
        typo_layers_ds = __webpack_require__(546),
        typo_layers_ds_default = __webpack_require__.n(typo_layers_ds);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)('h2', { id: 'introdução' }, 'Introdução'),
          Object(esm.b)(
            'p',
            null,
            'Na estrutura do Animalia DS, há variáveis tipográficas que são comuns à todas as marcas (',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'global tokens')
            ),
            '), como ',
            Object(esm.b)('em', { parentName: 'p' }, 'line-height.'),
            '\nE existem também as que se diferenciam de acordo com a marca (',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'brand tokens')
            ),
            '), como por exemplo ',
            Object(esm.b)('em', { parentName: 'p' }, 'font-family.')
          ),
          Object(esm.b)(
            'p',
            null,
            'Há ainda variáveis que estão na intersecção entre as duas camadas, como é o caso do ',
            Object(esm.b)('em', { parentName: 'p' }, 'font-size'),
            ' e ',
            Object(esm.b)('em', { parentName: 'p' }, 'font-weight.'),
            '\nIsto porque possuem os tokens básicos na camada ',
            Object(esm.b)('em', { parentName: 'p' }, 'global,'),
            ' mas também possuem previstas na camada de ',
            Object(esm.b)('em', { parentName: 'p' }, 'brand'),
            ' algumas\nvariações para atender a cenários específicos – que ficarão disponíveis apenas para a marca que tiver esta necessidade.'
          ),
          Object(esm.b)('img', {
            src: typo_layers_ds_default.a,
            alt:
              'Dois conjuntos com os tokens globais e os tokens de marca com uma intersecção contendo font-size e font-weight',
          }),
          Object(esm.b)(
            'p',
            null,
            'Assim, conseguimos ter uma estrutura geral, respeitando as particularidades e necessidades de cada marca ou produto dentro do Design System.'
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      var font_family_ds = __webpack_require__(547),
        font_family_ds_default = __webpack_require__.n(font_family_ds),
        font_family = __webpack_require__(548),
        font_family_default = __webpack_require__.n(font_family);
      function font_family_extends() {
        return (font_family_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function font_family_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function font_family_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var font_family_layoutProps = {};
      function font_family_MDXContent(_ref) {
        var components = _ref.components,
          props = font_family_objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          font_family_extends({}, font_family_layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(
            'h2',
            { id: 'font-family-família-tipográfica' },
            'Font-family: família tipográfica'
          ),
          Object(esm.b)(
            'p',
            null,
            'Família tipográfica, ou ',
            Object(esm.b)('strong', { parentName: 'p' }, 'font-family'),
            ', é o nome que se dá ao conjunto de fontes que apresentam as mesmas características\nestilísticas, mas variações de espessuras, larguras, etc.\nExemplos de famílias: ',
            Object(esm.b)('em', { parentName: 'p' }, 'Roboto'),
            ', ',
            Object(esm.b)('em', { parentName: 'p' }, 'Montserrat e'),
            ' ',
            Object(esm.b)('em', { parentName: 'p' }, 'Times New Roman.')
          ),
          Object(esm.b)('img', {
            src: font_family_default.a,
            alt:
              'Três colunas com exemplos das fontes Roboto, Montserrat e Times New Roman em formato regular, negrito e itálico',
          }),
          Object(esm.b)(
            'p',
            null,
            'A família tipográfica no Animalia DS fica na camada da marca e a estrutura permite utilizar até 3 famílias. Isto porque há três grupos principais onde pode haver variação: títulos, textos em geral e amostras de código.'
          ),
          Object(esm.b)(
            'ul',
            null,
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              Object(esm.b)(
                'inlineCode',
                { parentName: 'li' },
                '$font-family-heading'
              ),
              ', para títulos e chamadas'
            ),
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              Object(esm.b)(
                'inlineCode',
                { parentName: 'li' },
                '$font-family-text'
              ),
              ', para textos em geral'
            ),
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              Object(esm.b)(
                'inlineCode',
                { parentName: 'li' },
                '$font-family-code'
              ),
              ', para trechos de código em documentação técnica'
            )
          ),
          Object(esm.b)(
            'p',
            null,
            'Não existe a obrigatoriedade de se trabalhar com famílias diferentes – alguns cenários inclusive utilizam a mesma família\ntipográfica para títulos e textos, por exemplo. Mas é importante tratar de forma separada para o caso de haver uma mudança\nfutura.'
          ),
          Object(esm.b)('img', {
            src: font_family_ds_default.a,
            alt:
              'Dois exemplos um contendo fonte igual para títulos e textos e outra com fontes diferentes',
          })
        );
      }
      font_family_MDXContent.isMDXComponent = !0;
      var font_size_ds = __webpack_require__(549),
        font_size_ds_default = __webpack_require__.n(font_size_ds);
      function font_size_extends() {
        return (font_size_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function font_size_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function font_size_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var font_size_layoutProps = {};
      function font_size_MDXContent(_ref) {
        var components = _ref.components,
          props = font_size_objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          font_size_extends({}, font_size_layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(
            'h2',
            { id: 'font-size-tamanhos-e-escala' },
            'Font-size: tamanhos e escala'
          ),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'Font-size')
            ),
            ' é o tamanho da fonte propriamente dito, podendo ser especificado em diferentes medidas, como pixel, ponto,\nrem, em.'
          ),
          Object(esm.b)(
            'p',
            null,
            'Os tamanhos disponíveis no Animalia DS foram gerados a partir de uma ',
            Object(esm.b)(
              'a',
              { parentName: 'p', href: '' },
              'escala modular,'
            ),
            ' que engloba de 10 a 96px. Porém, fica\ncomum à todas as marcas ',
            Object(esm.b)('em', { parentName: 'p' }, '(global)'),
            ' a progressão do 12 ao 48px. Os demais tamanhos podem ser adicionados à camada das\nmarcas ',
            Object(esm.b)('em', { parentName: 'p' }, '(brand)'),
            ' que apresentarem essa necessidade.'
          ),
          Object(esm.b)('img', {
            src: font_size_ds_default.a,
            alt:
              'Tabela de referência dos tamanhos e seus respectivos tokens. Essa tabela pode ser acessada na página de tokens',
          }),
          Object(esm.b)(
            'p',
            null,
            'As ferramentas de design voltadas para interface utilizam pixel como unidade. Mas no desenvolvimento é importante considerar\nas medidas relativas, pois valores fixos podem prejudicar a acessibilidade.'
          ),
          Object(esm.b)(
            'h3',
            { id: 'a-escala-modular-do-animalia-ds' },
            'A escala modular do Animalia DS'
          ),
          Object(esm.b)(
            'ul',
            null,
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              Object(esm.b)(
                'p',
                { parentName: 'li' },
                Object(esm.b)(
                  'strong',
                  { parentName: 'p' },
                  'O que é uma escala modular e por que precisamos de uma?'
                )
              ),
              Object(esm.b)(
                'p',
                { parentName: 'li' },
                'Escala modular é uma maneira de se criar tamanhos de fontes, a partir de uma fórmula matemática.'
              ),
              Object(esm.b)(
                'p',
                { parentName: 'li' },
                'Adotar uma escala modular é interessante por permitir criar relações mais harmoniosas entre os tamanhos utilizados, além de tornar o processo de tomada de decisão consciente e menos arbitrário.'
              ),
              Object(esm.b)(
                'p',
                { parentName: 'li' },
                'Além disso, a progressão é gerada a partir de um ',
                Object(esm.b)('strong', { parentName: 'p' }, 'número base'),
                ', o que facilita o uso de medidas relativas (medidas em ',
                Object(esm.b)('strong', { parentName: 'p' }, 'rem'),
                ', ao invés de ',
                Object(esm.b)('strong', { parentName: 'p' }, 'pixels'),
                '), o que é um ponto bastante importante para acessibilidade.'
              ),
              Object(esm.b)(
                'p',
                { parentName: 'li' },
                Object(esm.b)(
                  'strong',
                  { parentName: 'p' },
                  'Principais vantagens:'
                )
              ),
              Object(esm.b)(
                'ul',
                { parentName: 'li' },
                Object(esm.b)(
                  'li',
                  { parentName: 'ul' },
                  'Proporções harmoniosas'
                ),
                Object(esm.b)(
                  'li',
                  { parentName: 'ul' },
                  'Diretriz racional para tomada de decisão'
                ),
                Object(esm.b)(
                  'li',
                  { parentName: 'ul' },
                  'Caso algum cenário tenha a necessidade de adicionar mais variações, a escala já dá o direcionamento para tal'
                ),
                Object(esm.b)(
                  'li',
                  { parentName: 'ul' },
                  'Utilização de medidas em números relativos (',
                  Object(esm.b)('strong', { parentName: 'li' }, 'rem'),
                  ', ',
                  Object(esm.b)('strong', { parentName: 'li' }, 'em'),
                  ')'
                )
              )
            )
          ),
          Object(esm.b)(
            'p',
            null,
            'A escala modular adotada no Animalia DS é baseada na ',
            Object(esm.b)(
              'inlineCode',
              { parentName: 'p' },
              '1.250 - Major Third'
            ),
            ' , por ter uma progressão suave entre os estágios, ao mesmo tempo que cria uma boa hierarquia.\nTem como base ',
            Object(esm.b)('inlineCode', { parentName: 'p' }, '1 rem = 16px'),
            ', por ser o tamanho padrão nos navegadores mais utilizados. Vale ressaltar que este valor não ficará fixo mas sim iremos assumir o ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'font-size')
            ),
            ' do navegador, pois assim damos liberdade para que o usuário ajuste o tamanho da fonte de acordo com sua preferência ou necessidade.'
          ),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)(
              'inlineCode',
              { parentName: 'p' },
              '16 * 1,250 = 20 * 1,250 = 25 * 1,250 = 31,25 * 1,250 = 39,06'
            ),
            ' ...'
          ),
          Object(esm.b)(
            'p',
            null,
            'Entretanto, como os valores nessa escala vão progredindo em números quebrados, foi feita uma pequena adequação para facilitar o uso, com a seguinte regra:'
          ),
          Object(esm.b)(
            'ul',
            null,
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              Object(esm.b)('strong', { parentName: 'li' }, 'acima de 16'),
              ', o valor em pixel foi ajustado para o número inteiro (múltiplo de 4) mais próximo'
            )
          ),
          Object(esm.b)(
            'p',
            null,
            'Exemplo: ',
            Object(esm.b)('strong', { parentName: 'p' }, '31,25'),
            '→ ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('inlineCode', { parentName: 'strong' }, '32')
            )
          ),
          Object(esm.b)(
            'ul',
            null,
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              Object(esm.b)('strong', { parentName: 'li' }, 'abaixo de 16'),
              ', o valor em pixel decresce de 2 em 2px'
            )
          )
        );
      }
      font_size_MDXContent.isMDXComponent = !0;
      var font_weight = __webpack_require__(550),
        font_weight_default = __webpack_require__.n(font_weight),
        font_weight_ds = __webpack_require__(551),
        font_weight_ds_default = __webpack_require__.n(font_weight_ds);
      function font_weight_extends() {
        return (font_weight_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function font_weight_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function font_weight_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var font_weight_layoutProps = {};
      function font_weight_MDXContent(_ref) {
        var components = _ref.components,
          props = font_weight_objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          font_weight_extends({}, font_weight_layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(
            'h2',
            { id: 'font-weight-variações-de-pesos' },
            'Font-weight: variações de pesos'
          ),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'Font-weight')
            ),
            ' se refere às variações de peso/ intensidade da fonte dentro de uma mesma família.\nEssas variações às vezes aparecem identificadas como light, normal, bold, extrabold, etc; ou por meio de uma\nnumeração padronizada (100 a 950), sendo que quando mais alto o número, mais grosso é o traço daquela versão.'
          ),
          Object(esm.b)(
            'p',
            null,
            'Vale ressaltar que nem todas as famílias tipográficas possuem todas as variações. Isso não é um impeditivo, mas\né algo que deve ser considerado ao se escolher uma família para uma marca ou projeto.'
          ),
          Object(esm.b)('img', {
            src: font_weight_default.a,
            alt: 'Exemplo de font-weight da família Inter\n',
          }),
          Object(esm.b)(
            'p',
            null,
            'Dentro das variações possíveis, o Animalia DS possui alguns pesos que são comuns à todas as marcas ',
            Object(esm.b)('em', { parentName: 'p' }, '(global tokens).'),
            '\nMas, caso exista a necessidade de trabalhar com outros pesos, estes serão incorporados e disponibilizados apenas\npara as marcas com esse cenário ',
            Object(esm.b)('em', { parentName: 'p' }, '(brand tokens)'),
            '.'
          ),
          Object(esm.b)(
            'p',
            null,
            'Assim, evita-se de sobrecarregar com variações que não estão sendo utilizadas, já que cada variação adicionada aumenta\no tamanho do arquivo para download para o usuário.'
          ),
          Object(esm.b)('img', {
            src: font_weight_ds_default.a,
            alt: 'Exemplo da família Inter, com font-weight do 100 ao 900',
          })
        );
      }
      font_weight_MDXContent.isMDXComponent = !0;
      var line_height = __webpack_require__(552),
        line_height_default = __webpack_require__.n(line_height),
        line_height_text = __webpack_require__(553),
        line_height_text_default = __webpack_require__.n(line_height_text),
        line_height_component = __webpack_require__(554),
        line_height_component_default = __webpack_require__.n(
          line_height_component
        );
      function line_height_extends() {
        return (line_height_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function line_height_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function line_height_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var line_height_layoutProps = {};
      function line_height_MDXContent(_ref) {
        var components = _ref.components,
          props = line_height_objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          line_height_extends({}, line_height_layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(
            'h2',
            { id: 'line-height-espaço-entrelinhas' },
            'Line-height: espaço entrelinhas'
          ),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'Line-height')
            ),
            ' (altura de linha ou entrelinha) na web é o espaço adicionado acima e abaixo acima e abaixo dos caracteres.'
          ),
          Object(esm.b)(
            'p',
            null,
            'Isto significa que uma fonte de 16px com entrelinha de 24px, terá 4px acima e abaixo.\nEssa medida é importante pois é ela quem molda a aparência dos parágrafos e está diretamente relacionada a uma boa leitura.'
          ),
          Object(esm.b)('img', {
            src: line_height_default.a,
            alt:
              'Esquema mostrando o font-size como a altura do texto e o line-height como os espaços acima e abaixo da fonte',
          }),
          Object(esm.b)(
            'h3',
            { id: 'uso-em-texto-corrido' },
            'Uso em texto corrido'
          ),
          Object(esm.b)(
            'p',
            null,
            'Para textos em geral, como parágrafos, legendas, etc, o uso de uma entrelinha adequada é essencial no conforto de leitura. Se o valor\nutilizado for muito justo ou muito espaçado, pode tornar a leitura mais difícil e cansativa.'
          ),
          Object(esm.b)('img', {
            src: line_height_text_default.a,
            alt:
              'Exemplos um do tipo ideal outro com espaçamento maior que o ideal e outro com espaçamento menor que o ideal',
          }),
          Object(esm.b)(
            'p',
            null,
            'Segundo a WCAG, todo conteúdo de texto precisa ter pelo menos 1.5x a altura do texto de entrelinha. Assim, se o texto possui 16px de tamanho, a entrelinha deve ser de pelo menos 24px, ou em porcentagens, no mínimo 150%.'
          ),
          Object(esm.b)(
            'p',
            null,
            'Entretanto, essa medida está diretamente relacionada ao tamanho da fonte. Quanto menor o tamanho da fonte, maior precisa ser a entrelinha para garantir uma boa leitura.'
          ),
          Object(esm.b)(
            'p',
            null,
            'Entretanto, essa medida está diretamente relacionada ao tamanho da fonte. Quanto menor o tamanho da fonte, maior precisa ser a entrelinha para garantir uma boa leitura.'
          ),
          Object(esm.b)(
            'h3',
            { id: 'uso-em-componentes' },
            'Uso em componentes'
          ),
          Object(esm.b)(
            'p',
            null,
            'Em componentes, a entrelinha perde sua função principal e passa a impactar na construção do componente em si e os espaços que o estruturam.'
          ),
          Object(esm.b)('img', {
            src: line_height_component_default.a,
            alt: 'Exemplo de um botão com line-height compondo a estrutura',
          }),
          Object(esm.b)(
            'p',
            null,
            'Nesses casos, há uma maior flexibilidade de uso e é preciso avaliar caso a caso, para aplicar a entrelinha mais adequada à necessidade.'
          )
        );
      }
      line_height_MDXContent.isMDXComponent = !0;
      var letter_spacing = __webpack_require__(555),
        letter_spacing_default = __webpack_require__.n(letter_spacing);
      function letter_spacing_extends() {
        return (letter_spacing_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function letter_spacing_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function letter_spacing_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var letter_spacing_layoutProps = {};
      function letter_spacing_MDXContent(_ref) {
        var components = _ref.components,
          props = letter_spacing_objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          letter_spacing_extends({}, letter_spacing_layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(
            'h2',
            { id: 'letter-spacing-espaço-entre-caracteres' },
            Object(esm.b)(
              'strong',
              { parentName: 'h2' },
              'Letter-Spacing: espaço entre caracteres'
            )
          ),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)('strong', { parentName: 'p' }, 'Letter-spacing'),
            ' é a propriedade que permite definir o espaçamento entre caracteres de texto. Somada à outras características – como a família utilizada, tamanho e peso – impacta diretamente o conforto na leitura.'
          ),
          Object(esm.b)(
            'p',
            null,
            'Para atender aos diferentes contextos, o Animalia DS possui cinco valores positivos (mais espaçados) e cinco negativos (menos espaçados), além do automático (padrão da fonte).'
          ),
          Object(esm.b)('img', {
            src: letter_spacing_default.a,
            alt:
              'Escala com zero ao centro indicando automático, à esquerda os valores negativos e à direita os valores positivos',
          })
        );
      }
      letter_spacing_MDXContent.isMDXComponent = !0;
      var transform_numtab = __webpack_require__(556),
        transform_numtab_default = __webpack_require__.n(transform_numtab);
      function transform_extends() {
        return (transform_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function transform_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function transform_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _templateObject9,
        _templateObject10,
        _templateObject11,
        _templateObject12,
        _templateObject13,
        _templateObject14,
        transform_layoutProps = {};
      function transform_MDXContent(_ref) {
        var components = _ref.components,
          props = transform_objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          transform_extends({}, transform_layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(
            'h2',
            { id: 'transform-modificações-em-texto' },
            'Transform: modificações em texto'
          ),
          Object(esm.b)(
            'p',
            null,
            'O modificador ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'transform')
            ),
            ' se refere à transformações no texto para situações e necessidades específicas, como todas as letras maiúsculas\nem uma tag, ou uma tabela que exige que todos os números ocupem o mesmo espaço.'
          ),
          Object(esm.b)('img', {
            src: transform_numtab_default.a,
            alt:
              'Exemplo de aplicação de transform padrão e outro do tipo numeração tabular',
          })
        );
      }
      function typography_stories_extends() {
        return (typography_stories_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _taggedTemplateLiteral(strings, raw) {
        return (
          raw || (raw = strings.slice(0)),
          Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            })
          )
        );
      }
      function typography_stories_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function typography_stories_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      transform_MDXContent.isMDXComponent = !0;
      var typography_stories_layoutProps = {};
      function typography_stories_MDXContent(_ref) {
        var components = _ref.components,
          props = typography_stories_objectWithoutProperties(_ref, [
            'components',
          ]);
        return Object(esm.b)(
          'wrapper',
          typography_stories_extends(
            {},
            typography_stories_layoutProps,
            props,
            { components: components, mdxType: 'MDXLayout' }
          ),
          Object(esm.b)(blocks.e, {
            title: 'Guia de estilo/Tipografia/Visão geral',
            parameters: { previewTabs: { canvas: { hidden: !0 } } },
            mdxType: 'Meta',
          }),
          Object(esm.b)(
            'h1',
            { id: 'tipografia-visão-geral' },
            'Tipografia: Visão Geral'
          ),
          Object(esm.b)(
            blocks.f,
            { name: 'Introdução', height: '0', mdxType: 'Story' },
            Object(lit_html.b)(
              _templateObject ||
                (_templateObject = _taggedTemplateLiteral(['']))
            )
          ),
          Object(esm.b)(
            'blockquote',
            null,
            Object(esm.b)(
              'p',
              { parentName: 'blockquote' },
              '95% das informações na web está em linguagem escrita'
            )
          ),
          Object(esm.b)(
            'p',
            null,
            '– ',
            Object(esm.b)(
              'em',
              { parentName: 'p' },
              Object(esm.b)(
                'a',
                {
                  parentName: 'em',
                  href:
                    'https://ia.net/topics/the-web-is-all-about-typography-period',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                'Oliver Reichensteisn'
              )
            )
          ),
          Object(esm.b)(
            'p',
            null,
            'Sabendo que a informação textual compõe grande parte do meio digital, fica evidente a importância da ',
            Object(esm.b)('strong', { parentName: 'p' }, 'Tipografia'),
            ',\npois esta é a disciplina que atua diretamente na modelagem dessa informação escrita.'
          ),
          Object(esm.b)(MDXContent, { mdxType: 'General' }),
          Object(esm.b)(
            blocks.f,
            { name: 'Família tipográfica', height: '0', mdxType: 'Story' },
            Object(lit_html.b)(
              _templateObject2 ||
                (_templateObject2 = _taggedTemplateLiteral(['']))
            )
          ),
          Object(esm.b)(font_family_MDXContent, { mdxType: 'FontFamily' }),
          Object(esm.b)(
            blocks.f,
            { name: 'Tamanhos e escala', height: '0', mdxType: 'Story' },
            Object(lit_html.b)(
              _templateObject3 ||
                (_templateObject3 = _taggedTemplateLiteral(['']))
            )
          ),
          Object(esm.b)(font_size_MDXContent, { mdxType: 'FontSize' }),
          Object(esm.b)(
            blocks.f,
            { name: 'Variações de pesos', height: '0', mdxType: 'Story' },
            Object(lit_html.b)(
              _templateObject4 ||
                (_templateObject4 = _taggedTemplateLiteral(['']))
            )
          ),
          Object(esm.b)(font_weight_MDXContent, { mdxType: 'FontWeight' }),
          Object(esm.b)(
            blocks.f,
            { name: 'Espaço entrelinhas', height: '0', mdxType: 'Story' },
            Object(lit_html.b)(
              _templateObject5 ||
                (_templateObject5 = _taggedTemplateLiteral(['']))
            )
          ),
          Object(esm.b)(line_height_MDXContent, { mdxType: 'LineHeight' }),
          Object(esm.b)(
            blocks.f,
            { name: 'Espaço entre caracteres', height: '0', mdxType: 'Story' },
            Object(lit_html.b)(
              _templateObject6 ||
                (_templateObject6 = _taggedTemplateLiteral(['']))
            )
          ),
          Object(esm.b)(letter_spacing_MDXContent, {
            mdxType: 'LetterSpacing',
          }),
          Object(esm.b)(
            blocks.f,
            { name: 'Modificações em texto', height: '0', mdxType: 'Story' },
            Object(lit_html.b)(
              _templateObject7 ||
                (_templateObject7 = _taggedTemplateLiteral(['']))
            )
          ),
          Object(esm.b)(transform_MDXContent, { mdxType: 'Transform' })
        );
      }
      typography_stories_MDXContent.isMDXComponent = !0;
      var typography_stories_introducao = function introducao() {
        return Object(lit_html.b)(
          _templateObject8 || (_templateObject8 = _taggedTemplateLiteral(['']))
        );
      };
      (typography_stories_introducao.storyName = 'Introdução'),
        (typography_stories_introducao.parameters = {
          storySource: { source: 'html``' },
        });
      var typography_stories_familiaTipografica = function familiaTipografica() {
        return Object(lit_html.b)(
          _templateObject9 || (_templateObject9 = _taggedTemplateLiteral(['']))
        );
      };
      (typography_stories_familiaTipografica.storyName = 'Família tipográfica'),
        (typography_stories_familiaTipografica.parameters = {
          storySource: { source: 'html``' },
        });
      var typography_stories_tamanhosEEscala = function tamanhosEEscala() {
        return Object(lit_html.b)(
          _templateObject10 ||
            (_templateObject10 = _taggedTemplateLiteral(['']))
        );
      };
      (typography_stories_tamanhosEEscala.storyName = 'Tamanhos e escala'),
        (typography_stories_tamanhosEEscala.parameters = {
          storySource: { source: 'html``' },
        });
      var typography_stories_variacoesDePesos = function variacoesDePesos() {
        return Object(lit_html.b)(
          _templateObject11 ||
            (_templateObject11 = _taggedTemplateLiteral(['']))
        );
      };
      (typography_stories_variacoesDePesos.storyName = 'Variações de pesos'),
        (typography_stories_variacoesDePesos.parameters = {
          storySource: { source: 'html``' },
        });
      var typography_stories_espacoEntrelinhas = function espacoEntrelinhas() {
        return Object(lit_html.b)(
          _templateObject12 ||
            (_templateObject12 = _taggedTemplateLiteral(['']))
        );
      };
      (typography_stories_espacoEntrelinhas.storyName = 'Espaço entrelinhas'),
        (typography_stories_espacoEntrelinhas.parameters = {
          storySource: { source: 'html``' },
        });
      var typography_stories_espacoEntreCaracteres = function espacoEntreCaracteres() {
        return Object(lit_html.b)(
          _templateObject13 ||
            (_templateObject13 = _taggedTemplateLiteral(['']))
        );
      };
      (typography_stories_espacoEntreCaracteres.storyName =
        'Espaço entre caracteres'),
        (typography_stories_espacoEntreCaracteres.parameters = {
          storySource: { source: 'html``' },
        });
      var typography_stories_modificacoesEmTexto = function modificacoesEmTexto() {
        return Object(lit_html.b)(
          _templateObject14 ||
            (_templateObject14 = _taggedTemplateLiteral(['']))
        );
      };
      (typography_stories_modificacoesEmTexto.storyName =
        'Modificações em texto'),
        (typography_stories_modificacoesEmTexto.parameters = {
          storySource: { source: 'html``' },
        });
      var componentMeta = {
          title: 'Guia de estilo/Tipografia/Visão geral',
          parameters: { previewTabs: { canvas: { hidden: !0 } } },
          includeStories: [
            'introducao',
            'familiaTipografica',
            'tamanhosEEscala',
            'variacoesDePesos',
            'espacoEntrelinhas',
            'espacoEntreCaracteres',
            'modificacoesEmTexto',
          ],
        },
        mdxStoryNameToKey = {
          Introdução: 'introducao',
          'Família tipográfica': 'familiaTipografica',
          'Tamanhos e escala': 'tamanhosEEscala',
          'Variações de pesos': 'variacoesDePesos',
          'Espaço entrelinhas': 'espacoEntrelinhas',
          'Espaço entre caracteres': 'espacoEntreCaracteres',
          'Modificações em texto': 'modificacoesEmTexto',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(esm.b)(
                blocks.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(esm.b)(typography_stories_MDXContent, null)
              );
            },
          }
        ));
      __webpack_exports__.default = componentMeta;
    },
    1033: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'visaoGeral', function () {
          return button_stories_visaoGeral;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'acessibilidade',
          function () {
            return button_stories_acessibilidade;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'desenvolvimento',
          function () {
            return button_stories_desenvolvimento;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'propriedadesCustomizaveis',
          function () {
            return button_stories_propriedadesCustomizaveis;
          }
        );
      __webpack_require__(16),
        __webpack_require__(54),
        __webpack_require__(179),
        __webpack_require__(143),
        __webpack_require__(8),
        __webpack_require__(9),
        __webpack_require__(12),
        __webpack_require__(1);
      var esm = __webpack_require__(0),
        blocks = __webpack_require__(5),
        lit_html = __webpack_require__(21);
      __webpack_require__(516);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)('h2', { id: 'desenvolvimento' }, 'Desenvolvimento'),
          Object(esm.b)('h3', { id: 'instalação' }, 'Instalação'),
          Object(esm.b)(
            'p',
            null,
            'Você pode instalar o componente de forma isolada, conforme o exemplo abaixo:'
          ),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre' },
              'npm install @animaliads/ani-button\n'
            )
          ),
          Object(esm.b)(
            'p',
            null,
            'Ou instalar a biblioteca inteira de componentes:'
          ),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre' },
              'npm install @animaliads/web-components\n'
            )
          ),
          Object(esm.b)('h3', { id: 'como-utilizar' }, 'Como utilizar'),
          Object(esm.b)(
            'p',
            null,
            'Para utilizar o web component na sua aplicação você precisa importar o arquivo principal:'
          ),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre', className: 'language-html' },
              '<script src="./node_modules/@animaliads/ani-button"></script>\n'
            )
          ),
          Object(esm.b)(
            'p',
            null,
            'Mas caso você estiver utilizando algum framework, pode ser necessário seguir a documentação do próprio\ncomponente para adicionar o web component. Ou apenas importar o arquivo do componente\nem um arquivo JS, por exemplo:'
          ),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre', className: 'language-javascript' },
              "import '@animaliads/ani-button';\n"
            )
          ),
          Object(esm.b)(
            'p',
            null,
            'Depois dessa configuração, basta adicionar a tag ',
            Object(esm.b)('inlineCode', { parentName: 'p' }, 'ani-button'),
            ' no seu código:'
          ),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre', className: 'language-html' },
              '<ani-button>Hello world!<ani-button></ani-button></ani-button>\n'
            )
          ),
          Object(esm.b)(
            'p',
            null,
            'Para customizar o tema do componente, você pode estar utilizando as propriedades customizáveis\nda seguinte forma:'
          ),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              { parentName: 'pre', className: 'language-css' },
              'ani-button {\n  --background: red;\n  --line-height: 100%;\n  --border-radius: 3px;\n}\n'
            )
          ),
          Object(esm.b)(
            'p',
            null,
            'Para saber quais são as propriedades disponível, consulte ',
            Object(esm.b)(
              'a',
              { parentName: 'p', href: '#propriedades-customiz%C3%A1veis' },
              'propriedades customizáveis do botão'
            ),
            '.'
          ),
          Object(esm.b)('h3', { id: 'live-demo' }, 'Live Demo'),
          Object(esm.b)('iframe', {
            src:
              'https://codesandbox.io/embed/ani-button-ofjep?fontsize=14&hidenavigation=1&theme=dark',
            style: {
              width: '90%',
              height: '500px',
              border: 'solid 1px black',
              borderRadius: '4px',
              overflow: 'hidden',
            },
            title: 'ani-button',
            allow:
              'accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking',
            sandbox:
              'allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts',
          }),
          Object(esm.b)(
            'p',
            null,
            'Para saber a lista de propriedades e eventos, acesse o ',
            Object(esm.b)(
              'a',
              { parentName: 'p', href: '/docs/api-button--sample' },
              'guia de referencia de API'
            ),
            '.'
          ),
          Object(esm.b)('p', null, 'Link úteis:'),
          Object(esm.b)(
            'ul',
            null,
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              Object(esm.b)(
                'a',
                {
                  parentName: 'li',
                  href: 'https://angular.io/guide/elements',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                'Angular elements'
              )
            ),
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              Object(esm.b)(
                'a',
                {
                  parentName: 'li',
                  href: 'https://pt-br.reactjs.org/docs/web-components.html',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                'Usando Web Components no React'
              )
            )
          )
        );
      }
      function accessibility_extends() {
        return (accessibility_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function accessibility_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function accessibility_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      MDXContent.isMDXComponent = !0;
      var accessibility_layoutProps = {};
      function accessibility_MDXContent(_ref) {
        var components = _ref.components,
          props = accessibility_objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          accessibility_extends({}, accessibility_layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)('h2', { id: 'acessibilidade' }, 'Acessibilidade'),
          Object(esm.b)(
            'p',
            null,
            'O componente botão foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.1, mas alterações feitas na aplicação deste podem afetar essa conformidade.'
          ),
          Object(esm.b)(
            'p',
            null,
            'Por isso, é muito importante que, ao aplicar esse componente, o proprietário do conteúdo leve em consideração os seguintes critérios:'
          ),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)('strong', { parentName: 'p' }, 'Operável')
          ),
          Object(esm.b)(
            'ul',
            null,
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              'O botão deve sempre ter um rótulo que descreva precisamente a ação que o mesmo executa. ',
              Object(esm.b)(
                'a',
                {
                  parentName: 'li',
                  href:
                    'https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                '2.4.6: Headings and Labels'
              )
            ),
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              'O nome acessível do botão deve conter o rótulo visível do mesmo. Em caso de descrição adicional, o rótulo deverá ser lido primeiro. ',
              Object(esm.b)(
                'a',
                {
                  parentName: 'li',
                  href:
                    'https://www.w3.org/WAI/WCAG21/Understanding/label-in-name',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                '2.5.3: Label in Name'
              )
            ),
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              'O estado de foco deve ser sempre preservado, inclusive quando o botão estiver desabilitado. ',
              Object(esm.b)(
                'a',
                {
                  parentName: 'li',
                  href:
                    'https://www.w3.org/WAI/WCAG21/Understanding/focus-visible',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                '2.4.7: Focus Visible'
              )
            ),
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              'Após a ativação do botão o foco deve ser movido dependendo do tipo de ação que o botão executa. Consultar lista de exemplos em ',
              Object(esm.b)(
                'a',
                {
                  parentName: 'li',
                  href: 'https://www.w3.org/TR/wai-aria-practices-1.1/#button',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                'W3C WAI-ARIA 3.5 Button'
              )
            )
          ),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)('strong', { parentName: 'p' }, 'Perceptível')
          ),
          Object(esm.b)(
            'ul',
            null,
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              'Entre as cores do rótulo do botão e seu background o contraste deve ser de no mínimo 7:1, para botões ativos. ',
              Object(esm.b)(
                'a',
                {
                  parentName: 'li',
                  href:
                    'https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                '1.4.6: Contrast'
              )
            )
          ),
          Object(esm.b)(
            'h3',
            { id: 'diretrizes-tratadas-no-componente' },
            'Diretrizes tratadas no componente'
          ),
          Object(esm.b)(
            'p',
            null,
            'Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:'
          ),
          Object(esm.b)(
            'ul',
            null,
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              'Quando em foco, o botão é ativado usando as teclas de ',
              Object(esm.b)('em', { parentName: 'li' }, 'Espaço'),
              ' e ',
              Object(esm.b)('em', { parentName: 'li' }, 'Enter'),
              ' do teclado. ',
              Object(esm.b)(
                'a',
                {
                  parentName: 'li',
                  href:
                    'https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
                'W3C WAI-ARIA 3.5 Button - Keyboard Interaction'
              )
            )
          )
        );
      }
      accessibility_MDXContent.isMDXComponent = !0;
      var button_anatomy = __webpack_require__(535),
        button_anatomy_default = __webpack_require__.n(button_anatomy),
        button_states = __webpack_require__(536),
        button_states_default = __webpack_require__.n(button_states);
      function general_extends() {
        return (general_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function general_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function general_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var general_layoutProps = {};
      function general_MDXContent(_ref) {
        var components = _ref.components,
          props = general_objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          general_extends({}, general_layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)('h1', { id: 'button' }, 'Button'),
          Object(esm.b)('h2', { id: 'visão-geral' }, 'Visão geral'),
          Object(esm.b)(
            'p',
            null,
            'Os botões são utilizados para realizar ações e para tomada de decisões. Podem ser utilizado em páginas e também dentro de outros componentes.'
          ),
          Object(esm.b)('h3', { id: 'boas-práticas' }, 'Boas práticas'),
          Object(esm.b)(
            'ul',
            null,
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              'Use labels (rótulos) diretos, curtos e intuitivos, que direcionem o usuário para o que será realizado. Para isso, prefira utilizar verbos, por exemplo: "Salvar" e "Adicionar";'
            ),
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              'A interação de foco deve compor os botões, sendo navegação por mouse ou teclado, e em sequência lógica;'
            ),
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              'Evite utilizar muitos botões em uma única tela, pois isso aumenta a carga cognitiva do usuário e vai aumentar seu tempo de decisão;'
            ),
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              'Não use cores para label e backgroud com baixo contraste entre elas, pois isso dificulta o entendimento do conteúdo do botão.'
            )
          ),
          Object(esm.b)('h3', { id: 'anatomia' }, 'Anatomia'),
          Object(esm.b)(
            'p',
            null,
            'O botão é composto por um background que recebe uma cor de marca e uma label que descreve a interação que será realizada.'
          ),
          Object(esm.b)('img', {
            src: button_anatomy_default.a,
            alt: 'Anatomia do botão, sendo 1 o label  e 2 o background',
          }),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)('strong', { parentName: 'p' }, '1.'),
            ' Label'
          ),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)('strong', { parentName: 'p' }, '2.'),
            ' Background'
          ),
          Object(esm.b)('h3', { id: 'estados-do-botão' }, 'Estados do botão'),
          Object(esm.b)(
            'p',
            null,
            'O botão possui estados e se modifica de acordo com a interação do usuário. São eles:'
          ),
          Object(esm.b)(
            'p',
            null,
            'Default, Hover, Focus, Disabled e Focusable Disabled.'
          ),
          Object(esm.b)('img', {
            src: button_states_default.a,
            alt: 'Os cinco estados do botão primário dispostos lado a lado',
          })
        );
      }
      function custom_properties_extends() {
        return (custom_properties_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function custom_properties_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function custom_properties_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      general_MDXContent.isMDXComponent = !0;
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        custom_properties_layoutProps = {};
      function custom_properties_MDXContent(_ref) {
        var components = _ref.components,
          props = custom_properties_objectWithoutProperties(_ref, [
            'components',
          ]);
        return Object(esm.b)(
          'wrapper',
          custom_properties_extends({}, custom_properties_layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(
            'h2',
            { id: 'propriedades-customizáveis' },
            'Propriedades customizáveis'
          ),
          Object(esm.b)(
            'p',
            null,
            'O botão possui propriedades customizáveis que podem variar de acordo com o tema selecionado. As propriedades customizáveis podem ser alteradas para cada produto, de acordo com os tokens de marca e tokens globais. Com isso, garantimos uma consistência no Design System, sem perder a identidade de cada marca.'
          ),
          Object(esm.b)('h3', { id: 'button' }, 'Button'),
          Object(esm.b)(
            'table',
            null,
            Object(esm.b)(
              'thead',
              { parentName: 'table' },
              Object(esm.b)(
                'tr',
                { parentName: 'thead' },
                Object(esm.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Estado'
                ),
                Object(esm.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Contexto'
                )
              )
            ),
            Object(esm.b)(
              'tbody',
              { parentName: 'table' },
              Object(esm.b)(
                'tr',
                { parentName: 'tbody' },
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(esm.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    '--font-family'
                  )
                ),
                Object(esm.b)('td', { parentName: 'tr', align: null }, 'Label')
              ),
              Object(esm.b)(
                'tr',
                { parentName: 'tbody' },
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(esm.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    '--text-color'
                  )
                ),
                Object(esm.b)('td', { parentName: 'tr', align: null }, 'Label')
              ),
              Object(esm.b)(
                'tr',
                { parentName: 'tbody' },
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(esm.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    '--font-size'
                  )
                ),
                Object(esm.b)('td', { parentName: 'tr', align: null }, 'Label')
              ),
              Object(esm.b)(
                'tr',
                { parentName: 'tbody' },
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(esm.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    '--line-height'
                  )
                ),
                Object(esm.b)('td', { parentName: 'tr', align: null }, 'Label')
              ),
              Object(esm.b)(
                'tr',
                { parentName: 'tbody' },
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(esm.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    '--background'
                  )
                ),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Background'
                )
              ),
              Object(esm.b)(
                'tr',
                { parentName: 'tbody' },
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(esm.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    '--border-radius'
                  )
                ),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Background'
                )
              ),
              Object(esm.b)(
                'tr',
                { parentName: 'tbody' },
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(esm.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    '--spacing-squish'
                  )
                ),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Background'
                )
              ),
              Object(esm.b)(
                'tr',
                { parentName: 'tbody' },
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(esm.b)('inlineCode', { parentName: 'td' }, '--shadow')
                ),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Background'
                )
              )
            )
          ),
          Object(esm.b)(
            'h3',
            { id: 'propriedades-customizáveis-em-cada-estado' },
            'Propriedades customizáveis em cada estado'
          ),
          Object(esm.b)(
            'table',
            null,
            Object(esm.b)(
              'thead',
              { parentName: 'table' },
              Object(esm.b)(
                'tr',
                { parentName: 'thead' },
                Object(esm.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Estado'
                ),
                Object(esm.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Propriedade'
                ),
                Object(esm.b)(
                  'th',
                  { parentName: 'tr', align: null },
                  'Contexto'
                )
              )
            ),
            Object(esm.b)(
              'tbody',
              { parentName: 'table' },
              Object(esm.b)(
                'tr',
                { parentName: 'tbody' },
                Object(esm.b)('td', { parentName: 'tr', align: null }, 'hover'),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(esm.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    '--background-hover'
                  )
                ),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Background'
                )
              ),
              Object(esm.b)(
                'tr',
                { parentName: 'tbody' },
                Object(esm.b)('td', { parentName: 'tr', align: null }, 'focus'),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(esm.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    '--outline-color-focused'
                  )
                ),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Outline'
                )
              ),
              Object(esm.b)(
                'tr',
                { parentName: 'tbody' },
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'pressed'
                ),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(esm.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    '--background-pressed'
                  )
                ),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Background'
                )
              ),
              Object(esm.b)(
                'tr',
                { parentName: 'tbody' },
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'pressed'
                ),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(esm.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    '--outline-color-pressed'
                  )
                ),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Outline'
                )
              ),
              Object(esm.b)(
                'tr',
                { parentName: 'tbody' },
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'disabled'
                ),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(esm.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    '--background-disabled'
                  )
                ),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Background'
                )
              ),
              Object(esm.b)(
                'tr',
                { parentName: 'tbody' },
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'disabled'
                ),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(esm.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    '--text-color-disabled'
                  )
                ),
                Object(esm.b)('td', { parentName: 'tr', align: null }, 'Label')
              ),
              Object(esm.b)(
                'tr',
                { parentName: 'tbody' },
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'focusable disabled'
                ),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  Object(esm.b)(
                    'inlineCode',
                    { parentName: 'td' },
                    '--outline-color-disabled'
                  )
                ),
                Object(esm.b)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Outline'
                )
              )
            )
          )
        );
      }
      function button_stories_extends() {
        return (button_stories_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _taggedTemplateLiteral(strings, raw) {
        return (
          raw || (raw = strings.slice(0)),
          Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            })
          )
        );
      }
      function button_stories_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function button_stories_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      custom_properties_MDXContent.isMDXComponent = !0;
      var button_stories_layoutProps = {};
      function button_stories_MDXContent(_ref) {
        var components = _ref.components,
          props = button_stories_objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          button_stories_extends({}, button_stories_layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(blocks.e, {
            title: 'Componentes/Button',
            parameters: { previewTabs: { canvas: { hidden: !0 } } },
            mdxType: 'Meta',
          }),
          Object(esm.b)(
            blocks.f,
            { name: 'Visão geral', height: '0', mdxType: 'Story' },
            Object(lit_html.b)(
              _templateObject ||
                (_templateObject = _taggedTemplateLiteral(['']))
            )
          ),
          Object(esm.b)(general_MDXContent, { mdxType: 'General' }),
          Object(esm.b)(
            blocks.f,
            { name: 'Acessibilidade', height: '0', mdxType: 'Story' },
            Object(lit_html.b)(
              _templateObject2 ||
                (_templateObject2 = _taggedTemplateLiteral(['']))
            )
          ),
          Object(esm.b)(accessibility_MDXContent, { mdxType: 'Accessibility' }),
          Object(esm.b)(
            blocks.f,
            { name: 'Desenvolvimento', height: '0', mdxType: 'Story' },
            Object(lit_html.b)(
              _templateObject3 ||
                (_templateObject3 = _taggedTemplateLiteral(['']))
            )
          ),
          Object(esm.b)(MDXContent, { mdxType: 'Code' }),
          Object(esm.b)(
            blocks.f,
            {
              name: 'Propriedades customizáveis',
              height: '0',
              mdxType: 'Story',
            },
            Object(lit_html.b)(
              _templateObject4 ||
                (_templateObject4 = _taggedTemplateLiteral(['']))
            )
          ),
          Object(esm.b)(custom_properties_MDXContent, {
            mdxType: 'CustomProperties',
          })
        );
      }
      button_stories_MDXContent.isMDXComponent = !0;
      var button_stories_visaoGeral = function visaoGeral() {
        return Object(lit_html.b)(
          _templateObject5 || (_templateObject5 = _taggedTemplateLiteral(['']))
        );
      };
      (button_stories_visaoGeral.storyName = 'Visão geral'),
        (button_stories_visaoGeral.parameters = {
          storySource: { source: 'html``' },
        });
      var button_stories_acessibilidade = function acessibilidade() {
        return Object(lit_html.b)(
          _templateObject6 || (_templateObject6 = _taggedTemplateLiteral(['']))
        );
      };
      (button_stories_acessibilidade.storyName = 'Acessibilidade'),
        (button_stories_acessibilidade.parameters = {
          storySource: { source: 'html``' },
        });
      var button_stories_desenvolvimento = function desenvolvimento() {
        return Object(lit_html.b)(
          _templateObject7 || (_templateObject7 = _taggedTemplateLiteral(['']))
        );
      };
      (button_stories_desenvolvimento.storyName = 'Desenvolvimento'),
        (button_stories_desenvolvimento.parameters = {
          storySource: { source: 'html``' },
        });
      var button_stories_propriedadesCustomizaveis = function propriedadesCustomizaveis() {
        return Object(lit_html.b)(
          _templateObject8 || (_templateObject8 = _taggedTemplateLiteral(['']))
        );
      };
      (button_stories_propriedadesCustomizaveis.storyName =
        'Propriedades customizáveis'),
        (button_stories_propriedadesCustomizaveis.parameters = {
          storySource: { source: 'html``' },
        });
      var componentMeta = {
          title: 'Componentes/Button',
          parameters: { previewTabs: { canvas: { hidden: !0 } } },
          includeStories: [
            'visaoGeral',
            'acessibilidade',
            'desenvolvimento',
            'propriedadesCustomizaveis',
          ],
        },
        mdxStoryNameToKey = {
          'Visão geral': 'visaoGeral',
          Acessibilidade: 'acessibilidade',
          Desenvolvimento: 'desenvolvimento',
          'Propriedades customizáveis': 'propriedadesCustomizaveis',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(esm.b)(
                blocks.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(esm.b)(button_stories_MDXContent, null)
              );
            },
          }
        ));
      __webpack_exports__.default = componentMeta;
    },
    1034: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'introducao', function () {
          return colors_stories_introducao;
        }),
        __webpack_require__.d(__webpack_exports__, 'mainColors', function () {
          return colors_stories_mainColors;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'neutralColors',
          function () {
            return colors_stories_neutralColors;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          'feedbackColors',
          function () {
            return colors_stories_feedbackColors;
          }
        );
      __webpack_require__(16),
        __webpack_require__(54),
        __webpack_require__(179),
        __webpack_require__(143),
        __webpack_require__(8),
        __webpack_require__(9),
        __webpack_require__(12),
        __webpack_require__(1);
      var esm = __webpack_require__(0),
        blocks = __webpack_require__(5),
        lit_html = __webpack_require__(21),
        colors_ds = __webpack_require__(538),
        colors_ds_default = __webpack_require__.n(colors_ds);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(
            'h1',
            { id: 'cores-visão-geral' },
            'Cores: Visão Geral'
          ),
          Object(esm.b)(
            'p',
            null,
            'Mais do que carregar expressividade e fazer conexão com a marca a qual representa, as cores utilizadas na interface assumem diversos papéis que auxiliam na compreensão das informações que estão sendo apresentadas, tendo impacto direto na usabilidade e acessibilidade.'
          ),
          Object(esm.b)(
            'blockquote',
            null,
            Object(esm.b)(
              'p',
              { parentName: 'blockquote' },
              'Para saber mais, consulte ',
              Object(esm.b)(
                'a',
                {
                  parentName: 'p',
                  href: '/docs/guia-de-estilo-cores-boas-pr%C3%A1ticas--page',
                },
                'Boas práticas no uso cores'
              ),
              '.'
            )
          ),
          Object(esm.b)(
            'p',
            null,
            'Pensando nos diversos papéis e contextos de uso de cor, a estrutura geral de cores do design system possui três grandes grupos: ',
            Object(esm.b)('strong', { parentName: 'p' }, 'Main'),
            ', ',
            Object(esm.b)('strong', { parentName: 'p' }, 'Neutral'),
            ' e ',
            Object(esm.b)('strong', { parentName: 'p' }, 'Feedback colors'),
            '.'
          ),
          Object(esm.b)(
            'div',
            { style: { padding: '0 0 16px 0' } },
            Object(esm.b)(
              'div',
              { style: { float: 'left', width: '33.333%' } },
              Object(esm.b)(
                'p',
                null,
                Object(esm.b)('strong', { parentName: 'p' }, 'Main colors')
              ),
              Object(esm.b)(
                'ul',
                null,
                Object(esm.b)('li', { parentName: 'ul' }, 'Brand color'),
                Object(esm.b)('li', { parentName: 'ul' }, 'Action color')
              )
            ),
            Object(esm.b)(
              'div',
              { style: { display: 'inline-block', width: '33.333%' } },
              Object(esm.b)(
                'p',
                null,
                Object(esm.b)('strong', { parentName: 'p' }, 'Neutral colors')
              ),
              Object(esm.b)(
                'ul',
                null,
                Object(esm.b)('li', { parentName: 'ul' }, 'Light neutral'),
                Object(esm.b)('li', { parentName: 'ul' }, 'Mid neutral'),
                Object(esm.b)('li', { parentName: 'ul' }, 'Dark neutral')
              )
            ),
            Object(esm.b)(
              'div',
              { style: { float: 'right', width: '33.333%' } },
              Object(esm.b)(
                'p',
                null,
                Object(esm.b)('strong', { parentName: 'p' }, 'Feedback colors')
              ),
              Object(esm.b)(
                'ul',
                null,
                Object(esm.b)('li', { parentName: 'ul' }, 'Positive'),
                Object(esm.b)('li', { parentName: 'ul' }, 'Negative'),
                Object(esm.b)('li', { parentName: 'ul' }, 'Warning'),
                Object(esm.b)('li', { parentName: 'ul' }, 'Informative')
              )
            )
          ),
          Object(esm.b)(
            'p',
            null,
            'As cores de feedback são comuns comuns à todas as marcas (',
            Object(esm.b)('em', { parentName: 'p' }, 'global tokens'),
            '). Já as ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'Main colors')
            ),
            ' e ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'Neutral colors')
            ),
            ', diferenciam-se de acordo com a marca (',
            Object(esm.b)('em', { parentName: 'p' }, 'brand tokens)'),
            '.'
          ),
          Object(esm.b)('img', {
            src: colors_ds_default.a,
            alt:
              'Dois conjuntos, sendo um com os tokens globais e outro com os tokens de marca',
          })
        );
      }
      MDXContent.isMDXComponent = !0;
      var brand_color = __webpack_require__(539),
        brand_color_default = __webpack_require__.n(brand_color),
        brand_color_example = __webpack_require__(540),
        brand_color_example_default = __webpack_require__.n(
          brand_color_example
        ),
        action_color = __webpack_require__(541),
        action_color_default = __webpack_require__.n(action_color);
      function main_colors_extends() {
        return (main_colors_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function main_colors_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function main_colors_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var main_colors_layoutProps = {};
      function main_colors_MDXContent(_ref) {
        var components = _ref.components,
          props = main_colors_objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          main_colors_extends({}, main_colors_layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(
            'h2',
            { id: 'main-colors-brand-e-action' },
            'Main colors: brand e action'
          ),
          Object(esm.b)(
            'p',
            null,
            '(',
            Object(esm.b)('em', { parentName: 'p' }, 'Cores principais'),
            ')'
          ),
          Object(esm.b)(
            'p',
            null,
            'O primeiro grupo de cores, denominado ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'main colors')
            ),
            ', faz parte da camada da marca no Design System e é composto por ',
            Object(esm.b)('strong', { parentName: 'p' }, 'Brand color'),
            ' e ',
            Object(esm.b)('strong', { parentName: 'p' }, 'Action color'),
            '.'
          ),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'Brand colors')
            ),
            ' são as cores que compõem a marca e a identidade visual. Além de poder ser usada como cor de ação, podem estar em interações com o logotipo, ilustrações, entre outras aplicações.'
          ),
          Object(esm.b)(
            'p',
            null,
            'A fim de atender aos diferente níveis de complexidades das marcas, a estrutura do Animalia permite acoplar em cada marca até três cores deste grupo (',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)(
                'inlineCode',
                { parentName: 'strong' },
                'color-brand-01'
              )
            ),
            ', ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)(
                'inlineCode',
                { parentName: 'strong' },
                'color-brand-02'
              )
            ),
            ' e ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)(
                'inlineCode',
                { parentName: 'strong' },
                'color-brand-03'
              )
            ),
            ' ), sendo que ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              'apenas uma é obrigatória'
            ),
            '.'
          ),
          Object(esm.b)('img', {
            src: brand_color_default.a,
            alt:
              'Estrutura da brand-color com três slots, o primeiro deles preenchido, representando que é obrigatório',
          }),
          Object(esm.b)(
            'p',
            null,
            'Pensando nos diversos cenários em que as cores são utilizadas, foi prevista uma gama de variações, de forma padronizada. Cada ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'brand color')
            ),
            ' possui uma ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'cor base')
            ),
            ', a partir da qual são geradas três cores mais escuras (',
            Object(esm.b)('strong', { parentName: 'p' }, 'dark'),
            ', ',
            Object(esm.b)('strong', { parentName: 'p' }, 'darker'),
            ' e ',
            Object(esm.b)('strong', { parentName: 'p' }, 'darkest'),
            ') e três cores mais claras (',
            Object(esm.b)('strong', { parentName: 'p' }, 'light'),
            ', ',
            Object(esm.b)('strong', { parentName: 'p' }, 'lighter'),
            ' e ',
            Object(esm.b)('strong', { parentName: 'p' }, 'lightest'),
            '), totalizando 7 variações.'
          ),
          Object(esm.b)('img', {
            src: brand_color_example_default.a,
            alt:
              'Exemplo de uma marca com duas brand-colors e sete variações para cada uma',
          }),
          Object(esm.b)(
            'p',
            null,
            'Já a ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'cor de ação')
            ),
            ' (',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)(
                'inlineCode',
                { parentName: 'strong' },
                'color-action'
              )
            ),
            ') será a cor definida para indicar as interações na interface e ',
            Object(esm.b)('strong', { parentName: 'p' }, 'é obrigatória'),
            '.'
          ),
          Object(esm.b)(
            'p',
            null,
            'Costuma ser uma das cores da própria marca (',
            Object(esm.b)('em', { parentName: 'p' }, 'brand color'),
            '), mas eventualmente pode não ser.'
          ),
          Object(esm.b)(
            'p',
            null,
            'A cor de ação possui cinco variações: ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'default')
            ),
            ', ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'hover')
            ),
            ', ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'pressed')
            ),
            ', ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'disabled')
            ),
            ' e ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'focus')
            ),
            '.\nEstas variações são utilizadas nos respectivos estados dos componentes, quando for pertinente.'
          ),
          Object(esm.b)('img', {
            src: action_color_default.a,
            alt: 'Exemplo de action color e as variações com os tokens',
          }),
          Object(esm.b)(
            'p',
            null,
            'Para a cor de acão, sempre precisarão ser feitos testes para verificar se a cor a ser adotada possui o contraste adequado para este fim.'
          )
        );
      }
      main_colors_MDXContent.isMDXComponent = !0;
      var neutral_mid = __webpack_require__(542),
        neutral_mid_default = __webpack_require__.n(neutral_mid),
        hsl_lightness = __webpack_require__(543),
        hsl_lightness_default = __webpack_require__.n(hsl_lightness),
        neutral_color = __webpack_require__(544),
        neutral_color_default = __webpack_require__.n(neutral_color);
      function neutral_colors_extends() {
        return (neutral_colors_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function neutral_colors_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function neutral_colors_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var neutral_colors_layoutProps = {};
      function neutral_colors_MDXContent(_ref) {
        var components = _ref.components,
          props = neutral_colors_objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          neutral_colors_extends({}, neutral_colors_layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)('h2', { id: 'neutral-colors' }, 'Neutral colors'),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)('em', { parentName: 'p' }, '(Cores neutras)')
          ),
          Object(esm.b)(
            'p',
            null,
            'O segundo grupo são as cores neutras, que geralmente compõem boa parte da interface. A paleta neutra é usada em background, textos, estado normal de componentes, dentre outros.'
          ),
          Object(esm.b)(
            'p',
            null,
            'Um ponto bem importante a ser destacado é que, por serem usadas em diferentes partes da interface, tanto em background quanto em textos como placeholder e rótulos, o contraste entre o elemento e a cor do fundo precisam ser sempre observados.'
          ),
          Object(esm.b)(
            'p',
            null,
            'E, em se tratando da paleta neutra, os tons intermediários em luminosidade (',
            Object(esm.b)('em', { parentName: 'p' }, 'lightness'),
            ') têm uma grande chance de não serem acessíveis (',
            Object(esm.b)(
              'a',
              {
                parentName: 'p',
                href:
                  'https://eightshapes.com/articles/color-in-design-systems.html',
                target: '_blank',
                rel: 'nofollow noopener noreferrer',
              },
              'Fonte'
            ),
            ').'
          ),
          Object(esm.b)('img', {
            src: neutral_mid_default.a,
            alt:
              'Escala light, mid e dark, com os neutros mid 40, 50 e 60 como arriscados para acessibilidade',
          }),
          Object(esm.b)(
            'p',
            null,
            'No modo de cores ',
            Object(esm.b)('strong', { parentName: 'p' }, 'HSL'),
            ', luminosidade é o terceiro campo:'
          ),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)('strong', { parentName: 'p' }, 'H'),
            ' (Hue) é a cor em si (azul, amarelo, verde...)'
          ),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)('strong', { parentName: 'p' }, 'S'),
            ' (Saturation): saturação, o quão vibrante é'
          ),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)('strong', { parentName: 'p' }, 'L'),
            ' (Lightness): luminosidade, o quanto de branco ou preto há naquele tom (claro/ escuro)'
          ),
          Object(esm.b)('img', {
            src: hsl_lightness_default.a,
            alt: 'Exemplo do branco #FFF, que possui 100% de luminosidade',
          }),
          Object(esm.b)(
            'p',
            null,
            'Para ter um melhor direcionamento no uso das cores, a paleta de neutros está dividida em três grupos, agrupados pelos níveis de luminosidade, sendo:'
          ),
          Object(esm.b)(
            'ul',
            null,
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              Object(esm.b)(
                'strong',
                { parentName: 'li' },
                Object(esm.b)(
                  'inlineCode',
                  { parentName: 'strong' },
                  'neutral-light:'
                )
              ),
              ' 00 a 30 de luminosidade'
            ),
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              Object(esm.b)(
                'strong',
                { parentName: 'li' },
                Object(esm.b)(
                  'inlineCode',
                  { parentName: 'strong' },
                  'neutral-mid:'
                )
              ),
              ' 40 a 60 de luminosidade'
            ),
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              Object(esm.b)(
                'strong',
                { parentName: 'li' },
                Object(esm.b)(
                  'inlineCode',
                  { parentName: 'strong' },
                  'neutral-dark:'
                )
              ),
              ' 70 a 95 de luminosidade'
            )
          ),
          Object(esm.b)('img', {
            src: neutral_color_default.a,
            alt:
              'Estrutura das cores neutras com 3 slots, com variações para light, mid e dark',
          }),
          Object(esm.b)(
            'p',
            null,
            'Os intermediários podem ser usados em alguns cenários específicos, mas sempre com ponto de atenção com relação ao contraste.'
          )
        );
      }
      neutral_colors_MDXContent.isMDXComponent = !0;
      var feedback_color = __webpack_require__(545),
        feedback_color_default = __webpack_require__.n(feedback_color);
      function feedback_colors_extends() {
        return (feedback_colors_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function feedback_colors_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function feedback_colors_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        feedback_colors_layoutProps = {};
      function feedback_colors_MDXContent(_ref) {
        var components = _ref.components,
          props = feedback_colors_objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          feedback_colors_extends({}, feedback_colors_layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)('h2', { id: 'feedback-colors' }, 'Feedback colors'),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)(
              'em',
              { parentName: 'p' },
              '(Cores de Feedback/ Cores de resposta)'
            )
          ),
          Object(esm.b)(
            'p',
            null,
            'O terceiro grupo de cores, denominado ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'Feedback colors')
            ),
            ', são cores geralmente usadas em mensagens de suporte ou respostas do sistema à ações realizadas.'
          ),
          Object(esm.b)(
            'p',
            null,
            'No Animalia há 4 cores de feedback: ',
            Object(esm.b)('strong', { parentName: 'p' }, 'Positive'),
            ' , ',
            Object(esm.b)('strong', { parentName: 'p' }, 'Negative'),
            ', ',
            Object(esm.b)('strong', { parentName: 'p' }, 'Warning'),
            ' e ',
            Object(esm.b)('strong', { parentName: 'p' }, 'Info'),
            '.'
          ),
          Object(esm.b)(
            'p',
            null,
            'A semântica adotada para estas cores foi pensada para ser o mais global possível, pois elas podem assumir diversos significados, dependendo do contexto. Alguns exemplos:'
          ),
          Object(esm.b)(
            'ul',
            null,
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              Object(esm.b)(
                'p',
                { parentName: 'li' },
                Object(esm.b)('strong', { parentName: 'p' }, 'Positive:'),
                ' confirmado, finalizado, aceito, recebido, correto, positivo'
              )
            ),
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              Object(esm.b)(
                'p',
                { parentName: 'li' },
                Object(esm.b)('strong', { parentName: 'p' }, 'Negative:'),
                ' falha, erro, risco, crítico, recusado, perda'
              )
            ),
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              Object(esm.b)(
                'p',
                { parentName: 'li' },
                Object(esm.b)('strong', { parentName: 'p' }, 'Warning:'),
                ' atenção, aviso, espera, alerta, prevenção, advertência'
              )
            ),
            Object(esm.b)(
              'li',
              { parentName: 'ul' },
              Object(esm.b)(
                'p',
                { parentName: 'li' },
                Object(esm.b)('strong', { parentName: 'p' }, 'Info:'),
                ' orientação, informação, suporte, ajuda, apoio'
              )
            )
          ),
          Object(esm.b)(
            'p',
            null,
            'Pelo cenário complexo que essas cores precisam atender, este grupo faz parte da camada global no Design System, sendo comum à todas as marcas.'
          ),
          Object(esm.b)(
            'p',
            null,
            'Essas cores são usadas não apenas como background, mas também em textos, ícones e outros elementos gráficos. Para atender aos diferentes cenários em que que são utilizadas, possui 7 variações, sendo uma ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'cor base')
            ),
            ', três tons mais escuros (',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'dark')
            ),
            ', ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'darker')
            ),
            ' e ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'darkest')
            ),
            ') e três mais claros (',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'light')
            ),
            ', ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'lighter')
            ),
            ' e ',
            Object(esm.b)(
              'strong',
              { parentName: 'p' },
              Object(esm.b)('em', { parentName: 'strong' }, 'lightest')
            ),
            ').'
          ),
          Object(esm.b)('img', {
            src: feedback_color_default.a,
            alt:
              ' Escalas das cores 4 cores de feedback e suas variações, ordenadas da mais clara para a mais escura',
          }),
          Object(esm.b)(
            'p',
            null,
            'Para consultar os valores de cada ',
            Object(esm.b)('strong', { parentName: 'p' }, 'Feedback Color'),
            ', ',
            Object(esm.b)(
              'a',
              {
                parentName: 'p',
                href: '/docs/guia-de-estilo-cores-design-tokens--page',
              },
              'acesse a página de design tokens'
            ),
            '.'
          )
        );
      }
      function colors_stories_extends() {
        return (colors_stories_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _taggedTemplateLiteral(strings, raw) {
        return (
          raw || (raw = strings.slice(0)),
          Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            })
          )
        );
      }
      function colors_stories_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function colors_stories_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      feedback_colors_MDXContent.isMDXComponent = !0;
      var colors_stories_layoutProps = {};
      function colors_stories_MDXContent(_ref) {
        var components = _ref.components,
          props = colors_stories_objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          colors_stories_extends({}, colors_stories_layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(blocks.e, {
            title: 'Guia de estilo/Cores/Visão geral',
            parameters: { previewTabs: { canvas: { hidden: !0 } } },
            mdxType: 'Meta',
          }),
          Object(esm.b)(
            blocks.f,
            { name: 'Introdução', height: '0', mdxType: 'Story' },
            Object(lit_html.b)(
              _templateObject ||
                (_templateObject = _taggedTemplateLiteral(['']))
            )
          ),
          Object(esm.b)(MDXContent, { mdxType: 'ColorsGeneral' }),
          Object(esm.b)(
            blocks.f,
            { name: 'Main colors', height: '0', mdxType: 'Story' },
            Object(lit_html.b)(
              _templateObject2 ||
                (_templateObject2 = _taggedTemplateLiteral(['']))
            )
          ),
          Object(esm.b)(main_colors_MDXContent, { mdxType: 'MainColors' }),
          Object(esm.b)(
            blocks.f,
            { name: 'Neutral colors', height: '0', mdxType: 'Story' },
            Object(lit_html.b)(
              _templateObject3 ||
                (_templateObject3 = _taggedTemplateLiteral(['']))
            )
          ),
          Object(esm.b)(neutral_colors_MDXContent, {
            mdxType: 'NeutralColors',
          }),
          Object(esm.b)(
            blocks.f,
            { name: 'Feedback colors', height: '0', mdxType: 'Story' },
            Object(lit_html.b)(
              _templateObject4 ||
                (_templateObject4 = _taggedTemplateLiteral(['']))
            )
          ),
          Object(esm.b)(feedback_colors_MDXContent, {
            mdxType: 'FeedbackColors',
          })
        );
      }
      colors_stories_MDXContent.isMDXComponent = !0;
      var colors_stories_introducao = function introducao() {
        return Object(lit_html.b)(
          _templateObject5 || (_templateObject5 = _taggedTemplateLiteral(['']))
        );
      };
      (colors_stories_introducao.storyName = 'Introdução'),
        (colors_stories_introducao.parameters = {
          storySource: { source: 'html``' },
        });
      var colors_stories_mainColors = function mainColors() {
        return Object(lit_html.b)(
          _templateObject6 || (_templateObject6 = _taggedTemplateLiteral(['']))
        );
      };
      (colors_stories_mainColors.storyName = 'Main colors'),
        (colors_stories_mainColors.parameters = {
          storySource: { source: 'html``' },
        });
      var colors_stories_neutralColors = function neutralColors() {
        return Object(lit_html.b)(
          _templateObject7 || (_templateObject7 = _taggedTemplateLiteral(['']))
        );
      };
      (colors_stories_neutralColors.storyName = 'Neutral colors'),
        (colors_stories_neutralColors.parameters = {
          storySource: { source: 'html``' },
        });
      var colors_stories_feedbackColors = function feedbackColors() {
        return Object(lit_html.b)(
          _templateObject8 || (_templateObject8 = _taggedTemplateLiteral(['']))
        );
      };
      (colors_stories_feedbackColors.storyName = 'Feedback colors'),
        (colors_stories_feedbackColors.parameters = {
          storySource: { source: 'html``' },
        });
      var componentMeta = {
          title: 'Guia de estilo/Cores/Visão geral',
          parameters: { previewTabs: { canvas: { hidden: !0 } } },
          includeStories: [
            'introducao',
            'mainColors',
            'neutralColors',
            'feedbackColors',
          ],
        },
        mdxStoryNameToKey = {
          Introdução: 'introducao',
          'Main colors': 'mainColors',
          'Neutral colors': 'neutralColors',
          'Feedback colors': 'feedbackColors',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(esm.b)(
                blocks.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(esm.b)(colors_stories_MDXContent, null)
              );
            },
          }
        ));
      __webpack_exports__.default = componentMeta;
    },
    1041: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          'parameters',
          function () {
            return parameters;
          }
        ),
        __webpack_require__.d(
          preview_namespaceObject,
          'globalTypes',
          function () {
            return globalTypes;
          }
        ),
        __webpack_require__.d(
          preview_namespaceObject,
          'decorators',
          function () {
            return decorators;
          }
        );
      __webpack_require__(9),
        __webpack_require__(16),
        __webpack_require__(57),
        __webpack_require__(1014),
        __webpack_require__(43),
        __webpack_require__(44),
        __webpack_require__(1015),
        __webpack_require__(143),
        __webpack_require__(325);
      var _templateObject,
        client_api = __webpack_require__(56),
        esm = __webpack_require__(7),
        lit_html =
          (__webpack_require__(54),
          __webpack_require__(179),
          __webpack_require__(21));
      var parameters = {
          viewMode: 'docs',
          actions: { argTypesRegex: '^on[A-Z].*' },
          options: {
            storySort: {
              method: '',
              order: [
                'Página inicial',
                'Princípios',
                'Começando',
                'Guia de estilo',
                ['Cores', 'Tipografia'],
                ['Visão geral', 'Boas práticas', 'Design Tokens'],
                'Componentes',
                'API',
                'Changelog',
              ],
            },
          },
        },
        globalTypes = {
          theme: {
            name: 'Theme',
            description: 'Global theme for components',
            defaultValue: 'poui',
            toolbar: {
              icon: 'circle',
              items: [
                { value: 'poui', title: 'PO UI' },
                { value: 'fluig', title: 'Fluig' },
              ],
            },
          },
        },
        decorators = [
          function decorator(story, context) {
            var theme = context.globals.theme;
            return Object(lit_html.b)(
              _templateObject ||
                (_templateObject = (function _taggedTemplateLiteral(
                  strings,
                  raw
                ) {
                  return (
                    raw || (raw = strings.slice(0)),
                    Object.freeze(
                      Object.defineProperties(strings, {
                        raw: { value: Object.freeze(raw) },
                      })
                    )
                  );
                })([
                  '\n    <link rel="stylesheet" href="',
                  '" />\n    ',
                  '\n  ',
                ])),
              {
                poui:
                  'https://unpkg.com/@animaliads/po-ui-brand@next/theme.css',
                fluig:
                  'https://unpkg.com/@animaliads/fluig-brand@next/theme.css',
              }[theme],
              story()
            );
          },
        ];
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
          case 'argTypes':
            return esm.a.warn(
              'Invalid args/argTypes in config, ignoring.',
              JSON.stringify(value)
            );
          case 'decorators':
            return value.forEach(function (decorator) {
              return Object(client_api.b)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return Object(client_api.c)(loader, !1);
            });
          case 'parameters':
            return Object(client_api.d)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return Object(client_api.a)(enhancer);
            });
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), Object(client_api.d)(v, !1);
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    1042: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function () {
          return __page;
        });
      __webpack_require__(8),
        __webpack_require__(9),
        __webpack_require__(12),
        __webpack_require__(16),
        __webpack_require__(1);
      var esm = __webpack_require__(0),
        blocks = __webpack_require__(5);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, ['components']);
        return Object(esm.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(blocks.e, {
            title: 'Changelog',
            parameters: { previewTabs: { canvas: { hidden: !0 } } },
            mdxType: 'Meta',
          }),
          Object(esm.b)(
            blocks.d,
            { mdxType: 'Description' },
            '# Changelog\n\n## Versão 1.0.0-next.1 - Calango\n\n28 de abril de 2021\n\n### 🎉 Novidades (New Features)\n\n- **Global tokens:** Definição e disponibilização dos global tokens (Font size, Font weight, Line-height, Letter spacing, Feedback colors, Border width, Border radius, Shadow, Spacing squish)\n- **Documentação (Cores)**: Visão geral sobre a estrutura das cores, boas práticas e design tokens (global tokens)\n- **Documentação (Tipografia)**: Visão geral sobre a estrutura de tipografia e design tokens\n- **Documentação (Button)**: Visão geral sobre o componente, com boas práticas, anatomia e estados, listagem das propriedades e acessibilidade\n- [Repositório de design](https://github.com/animaliads/animalia-design) para versionamento dos arquivos Sketch, no Github\n- **Button**: novo componente. Botão do tipo primário.\n  <br>\n\n---\n\n> O Design System é uma construção coletiva. Caso tenha sugestões ou algum ponto que gostaria de compartilhar conosco, entre em contato em <a href = "mailto: animaliads@totvs.com.br">animaliads@totvs.com.br </a> ou [abra uma issue no nosso Github](https://github.com/animaliads/animalia-web-components/issues).\n'
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      var __page = function __page() {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: 'Changelog',
          parameters: { previewTabs: { canvas: { hidden: !0 } } },
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(esm.b)(
                blocks.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentMeta: componentMeta,
                },
                Object(esm.b)(MDXContent, null)
              );
            },
          }
        ));
      __webpack_exports__.default = componentMeta;
    },
    516: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(1018),
        __webpack_require__(72),
        __webpack_require__(12),
        __webpack_require__(25),
        __webpack_require__(103),
        __webpack_require__(1019),
        __webpack_require__(1020),
        __webpack_require__(512),
        __webpack_require__(399),
        __webpack_require__(49),
        __webpack_require__(51),
        __webpack_require__(60),
        __webpack_require__(1021),
        __webpack_require__(325),
        __webpack_require__(16),
        __webpack_require__(41),
        __webpack_require__(133);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function _assertThisInitialized(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return self;
            })(self)
          : call;
      }
      function _wrapNativeSuper(Class) {
        var _cache = 'function' == typeof Map ? new Map() : void 0;
        return (_wrapNativeSuper = function _wrapNativeSuper(Class) {
          if (
            null === Class ||
            !(function _isNativeFunction(fn) {
              return -1 !== Function.toString.call(fn).indexOf('[native code]');
            })(Class)
          )
            return Class;
          if ('function' != typeof Class)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          if (void 0 !== _cache) {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
          }
          function Wrapper() {
            return _construct(
              Class,
              arguments,
              _getPrototypeOf(this).constructor
            );
          }
          return (
            (Wrapper.prototype = Object.create(Class.prototype, {
              constructor: {
                value: Wrapper,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            _setPrototypeOf(Wrapper, Class)
          );
        })(Class);
      }
      function _construct(Parent, args, Class) {
        return (_construct = _isNativeReflectConstruct()
          ? Reflect.construct
          : function _construct(Parent, args, Class) {
              var a = [null];
              a.push.apply(a, args);
              var instance = new (Function.bind.apply(Parent, a))();
              return (
                Class && _setPrototypeOf(instance, Class.prototype), instance
              );
            }).apply(null, arguments);
      }
      function _isNativeReflectConstruct() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      var button_Button = (function (_HTMLElement) {
        !(function _inherits(subClass, superClass) {
          if ('function' != typeof superClass && null !== superClass)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (subClass.prototype = Object.create(
            superClass && superClass.prototype,
            { constructor: { value: subClass, writable: !0, configurable: !0 } }
          )),
            superClass && _setPrototypeOf(subClass, superClass);
        })(Button, _HTMLElement);
        var _super = (function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var result,
              Super = _getPrototypeOf(Derived);
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else result = Super.apply(this, arguments);
            return _possibleConstructorReturn(this, result);
          };
        })(Button);
        function Button() {
          var _this;
          return (
            (function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, Button),
            ((_this = _super.call(this)).shadow = _this.attachShadow({
              mode: 'open',
            })),
            (_this.clickEvent = document.createEvent('Event')),
            _this.clickEvent.initEvent('onClick', !0, !0),
            _this.addEventListener('click', _this.onClick),
            _this
          );
        }
        return (
          (function _createClass(Constructor, protoProps, staticProps) {
            return (
              protoProps &&
                _defineProperties(Constructor.prototype, protoProps),
              staticProps && _defineProperties(Constructor, staticProps),
              Constructor
            );
          })(
            Button,
            [
              {
                key: 'disabled',
                get: function get() {
                  return (function transformBooleanProperties(value) {
                    if ('' === value) return 'true';
                    if (null === value) return 'false';
                    return value;
                  })(this.getAttribute('disabled'));
                },
              },
              {
                key: 'connectedCallback',
                value: function connectedCallback() {
                  this.render(), this.setAccessibility();
                },
              },
              {
                key: 'attributeChangedCallback',
                value: function attributeChangedCallback() {
                  this.render(), this.setAccessibility();
                },
              },
              {
                key: 'onClick',
                value: function onClick() {
                  'true' !== this.disabled &&
                    this.dispatchEvent(this.clickEvent);
                },
              },
              {
                key: 'setAccessibility',
                value: function setAccessibility() {
                  (this.buttonElement = this.shadow.getElementById(
                    'buttonElement'
                  )),
                    this.buttonElement.setAttribute(
                      'aria-disabled',
                      this.disabled
                    );
                },
              },
              {
                key: 'render',
                value: function render() {
                  this.shadow.innerHTML = '\n            <style>'.concat(
                    "\n  button {\n    /* Custom */\n    font-family: var(--font-family);\n    color: var(--text-color);\n    font-size: var(--font-size);\n    line-height: var(--line-height);\n\n    background-color: var(--background);\n    border-radius: var(--border-radius);\n    padding: var(--spacing-squish);\n\n    box-shadow: var(--shadow);\n\n    /* Fixed */\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-auto);\n    border: none;\n  }\n\n  button:hover {\n    /* Custom */\n    background-color: var(--background-hover);\n\n    /* Fixed */\n    cursor: pointer;\n  }\n\n  button:focus {\n    /* Fixed */\n    /* outline-width in box-shadow */\n    outline: none;\n    box-shadow: 0 0 0 var(--border-width-lg) var(--outline-color-focused);\n  }\n\n  button:active {\n    /* Custom */\n    background-color: var(--background-pressed);\n\n    /* Fixed */\n    /* outline-width in box-shadow */\n    box-shadow: 0 0 0 var(--border-width-lg) var(--outline-color-focused);\n    cursor: pointer;\n  }\n\n  button[aria-disabled='true'] {\n    /* Custom */\n    background-color: var(--background-disabled);\n    color: var(--text-color-disabled);\n\n    /* Fixed */\n    cursor: not-allowed;\n  }\n\n  button[aria-disabled='true']:focus {\n    /* Custom */\n    outline-color: var(--outline-color-disabled);\n\n    /* Fixed */\n    outline-offset: 2px;\n    outline-width: var(--border-width-lg);\n  }\n",
                    '</style>\n            <button id="buttonElement">\n                <slot></slot>\n            </button>\n        '
                  );
                },
              },
            ],
            [
              {
                key: 'observedAttributes',
                get: function get() {
                  return ['type', 'disabled'];
                },
              },
            ]
          ),
          Button
        );
      })(_wrapNativeSuper(HTMLElement));
      customElements.define('ani-button', button_Button);
    },
    535: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/button-anatomy.2998880a.svg';
    },
    536: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/button-states.a5350675.jpg';
    },
    537: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/best-practices.dff68348.svg';
    },
    538: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/colors-ds.0873a2e5.svg';
    },
    539: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/brand-color.f8dfb7d9.svg';
    },
    540: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/brand-color-example.f6394a12.svg';
    },
    541: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/action-color.ff37a472.svg';
    },
    542: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/neutral-mid.9d2efb8a.svg';
    },
    543: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/hsl-lightness.c73d759d.png';
    },
    544: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/neutral-color.2c91e2e9.svg';
    },
    545: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/feedback-color.42d10d4a.svg';
    },
    546: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/typo-layers-ds.e7137b21.svg';
    },
    547: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/font-family-ds.f0559377.svg';
    },
    548: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/font-family.235b65e7.svg';
    },
    549: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/font-size-ds.d2d97b29.svg';
    },
    550: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/font-weight.d78baf4a.svg';
    },
    551: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/font-weight-ds.0e96cd11.svg';
    },
    552: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/line-height.a92c3328.svg';
    },
    553: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/line-height-text.b845e032.svg';
    },
    554: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p +
        'static/media/line-height-component.5eca6377.svg';
    },
    555: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/letter-spacing.7da51fd4.svg';
    },
    556: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/transform-numtab.c55c654c.svg';
    },
    557: function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + 'static/media/animalia.51f4a118.png';
    },
    577: function (module, exports, __webpack_require__) {
      __webpack_require__(578),
        __webpack_require__(732),
        __webpack_require__(733),
        __webpack_require__(1035),
        __webpack_require__(1036),
        __webpack_require__(1038),
        __webpack_require__(1039),
        __webpack_require__(1037),
        __webpack_require__(1032),
        __webpack_require__(1040),
        __webpack_require__(918),
        __webpack_require__(1010),
        __webpack_require__(1011),
        __webpack_require__(1041),
        (module.exports = __webpack_require__(1016));
    },
    645: function (module, exports) {},
    733: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(125);
    },
    923: function (module, exports) {},
    925: function (module, exports) {},
    936: function (module, exports) {},
    938: function (module, exports) {},
    963: function (module, exports) {},
    965: function (module, exports) {},
    966: function (module, exports) {},
    971: function (module, exports) {},
    973: function (module, exports) {},
    992: function (module, exports) {},
  },
  [[577, 2, 3]],
]);
