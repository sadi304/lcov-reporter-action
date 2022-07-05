# Lcov reporter action (works with any lcov/dart/flutter with min. threshold check)

See original repo for details

Added a minimum threshold & working dir input to add check for passing action

## Example output

<h4>(your title)</h4>Coverage after merging <b>my-branch</b> into <b>master</b> will be<table><tbody><tr><th>92%</th></tr></tbody></table>

<details><summary>Coverage Report</summary><table><tbody><tr><th>File</th><th>Stmts</th><th>Branches</th><th>Funcs</th><th>Lines</th><th>Uncovered Lines</th></tr><tr><td colspan='6'><b>lib/src</b></td></tr><tr><td>&nbsp; &nbsp;<a href='#'>button.dart</a></td><td><b>91.30%</b></td><td>100%</td><td>100%</td><td><b>91.30%</b></td><td><a href='#'>15</a>, <a href='#'>43</a></td></tr></tbody></table></details>

## Inputs (initial inputs work as it is, see original repo)

##### `threshold` (**Optional**)
Minimum threshold that should be passed for a successful action. Defaults to 0
##### `working-dir` (**Optional**)
Working dir to be passed for mono repo structures. Defaults to '' (pass without slashes)

## Example usage

```yml
uses: romeovs/lcov-reporter-action@v0.2.16
with:
  lcov-file: ./coverage/lcov.info
  threshold: 90
  working-dir: 'package'
```

## Acknowledgements

Code is based on [romeovs/jest-reporter-action] (https://github.com/romeovs/lcov-reporter-action)
