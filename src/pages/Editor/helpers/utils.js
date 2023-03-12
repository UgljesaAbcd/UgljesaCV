export const getThemeColors = theme => ({
  plain: {
    color: '#F8F8F2',
    backgroundColor: '#282A36'
  },
  styles: [
    {
      types: ['prolog', 'constant', 'builtin'],
      style: {
        color: theme.palette.primary.dark
      }
    },
    {
      types: ['inserted', 'function'],
      style: {
        color: theme.palette.primary.main
      }
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)'
      }
    },
    {
      types: ['changed'],
      style: {
        color: 'rgb(255, 184, 108)'
      }
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        color: 'rgb(248, 248, 242)'
      }
    },
    {
      types: ['string', 'char', 'tag', 'selector'],
      style: {
        color: theme.palette.secondary.main
      }
    },
    {
      types: ['keyword', 'variable'],
      style: {
        color: theme.palette.primary.dark,
        fontStyle: 'italic'
      }
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(98, 114, 164)'
      }
    },
    {
      types: ['attr-name'],
      style: {
        color: theme.palette.secondary.light
      }
    }
  ]
});

export const codeOfUsePreviousHook = `
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
`;

export const editorCode = `
function MyCode() {
  const [stateNumber, setStateNumber] = useState(0);
  const previousStateNumber = usePrevious(stateNumber);

  const resetClicked = () => {
    setStateNumber(0);
  };

  return (
    <Grid>
      <Grid>
        <Button
          color="secondary" 
          variant="contained"
          sx={{mr: 1}}
          onClick={() => setStateNumber(stateNumber + 1)}
        >
         Add one
        </Button>
        <Button 
          color="secondary" 
          variant="contained"
          sx={{mr: 1}}
          onClick={() => setStateNumber(stateNumber - 1)}
        >
         Subtract one
        </Button>
        <Button 
          color="secondary" 
          variant="contained" 
          onClick={resetClicked}
        >
          Reset
        </Button>
      </Grid>
      <Grid sx={{pt: 2}} >{"Number state value: " + stateNumber}</Grid>
      <Grid sx={{pb: 2}} >
        {"Previous Number state value: " + previousStateNumber}
      </Grid>
    </Grid>
  );
}
`;
