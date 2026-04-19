# ACGTI Feedback 分析报告（2026-04-20）

## 数据规模

- D1：`acgti-stats`，本次全库 dump 已落地到 `analysis/backup/full_2026-04-20.sql`。
- feedback 总数：5681。
- 有合法预测 MBTI 的 feedback：5679。
- 带 answers_json 的 feedback：5671。
- confidence >= 4：3730；其中带 answers_json：3721。
- 抽样提交：submissions_sampled=1065，submission_answers_blob=1065。

## 一致率

```text
      segment    n  match_rate  EI_rate  SN_rate  TF_rate  JP_rate
          all 5679    0.139637 0.639725 0.547808 0.649058 0.576334
confidence>=4 3728    0.149946 0.652361 0.553112 0.652897 0.581009
confidence>=5 2105    0.159145 0.652732 0.550594 0.668884 0.576722
```

结论：完全四字母命中率偏低，高置信样本约 15.0%。四维拆开看，最弱是 S/N 和 J/P，说明问题主要不是单个角色，而是维度边界和题目权重。

## 样本分布偏差

高置信自报集中在 INFP/INTP/INFJ/ENFP/INTJ；预测结果更平均，并明显多判到 J 与 S。

```text
self top:
self_mbti   n
     INFP 877
     INTP 529
     INFJ 426
     ENFP 385
     INTJ 301
     ISFP 286
     ENTP 253
     ENFJ 119
     ISTP 115
     ISTJ 105

pred top:
pred_mbti   n
     INFJ 442
     INFP 357
     INTJ 356
     ENFJ 344
     ISFJ 341
     ISFP 318
     ESFJ 291
     ESFP 285
     ENFP 268
     ENTJ 178

letter split:
dimension source      I      E      N      S      F      T      P      J
       EI   self 0.7342 0.2658    NaN    NaN    NaN    NaN    NaN    NaN
       EI   pred 0.5700 0.4300    NaN    NaN    NaN    NaN    NaN    NaN
       SN   self    NaN    NaN 0.7975 0.2025    NaN    NaN    NaN    NaN
       SN   pred    NaN    NaN 0.5850 0.4150    NaN    NaN    NaN    NaN
       TF   self    NaN    NaN    NaN    NaN 0.6127 0.3873    NaN    NaN
       TF   pred    NaN    NaN    NaN    NaN 0.7098 0.2902    NaN    NaN
       JP   self    NaN    NaN    NaN    NaN    NaN    NaN 0.6803 0.3197
       JP   pred    NaN    NaN    NaN    NaN    NaN    NaN 0.4211 0.5789
```

## 高频错配

```text
self_mbti pred_mbti   n
     INFP      INFJ 118
     INFP      ISFP 114
     INFP      ISFJ  90
     INFP      ESFP  77
     ENFP      ESFP  71
     INFP      ENFP  66
     INFP      INTJ  63
     INTP      INTJ  63
     INFP      ENFJ  62
     INTP      INFP  61
     INTP      INFJ  60
     INFJ      ISFJ  60
     INTP      ISFP  50
     INFP      ESFJ  48
     ENFP      ENFJ  47
     INFJ      ESFJ  47
     INTJ      INFJ  46
     ISFP      INFP  39
     ENFP      ESFJ  39
     INTP      ISFJ  37
```

## 版本对比

```text
feedback_app_version    n  match_rate  EI_rate  SN_rate  TF_rate  JP_rate
               0.3.0 3728    0.149946 0.652361 0.553112 0.652897 0.581009
```

当前只有 0.3.0，暂时不能做版本回归。下一版调参后要继续用 app_version 对比。

## 原型争议度

```text
   archetype_code    n  match_rate  EI_rate  SN_rate  TF_rate  JP_rate
shadow-strategist 2263    0.145824 0.661069 0.539107 0.663721 0.594786
  trickster-orbit  433    0.152425 0.658199 0.623557 0.609700 0.570439
oathbound-captain  314    0.175159 0.630573 0.531847 0.652866 0.570064
    gentle-healer  203    0.123153 0.665025 0.536946 0.645320 0.546798
icebound-observer  193    0.186528 0.632124 0.606218 0.616580 0.554404
    luminous-lead  189    0.111111 0.582011 0.513228 0.693122 0.555556
      chaos-spark   90    0.222222 0.633333 0.677778 0.633333 0.544444
 moonlit-guardian   43    0.139535 0.674419 0.488372 0.581395 0.511628
```

moonlit-guardian、luminous-lead、gentle-healer 的样本一致率偏弱；chaos-spark 样本较少但表现相对好。

## 角色争议度

样本量 >=20 时，低一致率角色：

```text
character_code   n  match_rate  EI_rate  SN_rate  TF_rate  JP_rate
          MARN  63    0.031746 0.539683 0.460317 0.793651 0.571429
          ERUC  47    0.042553 0.531915 0.510638 0.638298 0.425532
          TMRS  50    0.060000 0.560000 0.320000 0.560000 0.520000
          NENE  52    0.076923 0.846154 0.326923 0.807692 0.557692
          TAFI  34    0.088235 0.588235 0.500000 0.676471 0.588235
          CIRN  93    0.096774 0.634409 0.494624 0.623656 0.526882
          MYRI  40    0.100000 0.550000 0.650000 0.625000 0.550000
          SERN  30    0.100000 0.700000 0.500000 0.766667 0.600000
          MEGR  27    0.111111 0.555556 0.518519 0.851852 0.370370
          NEUR 172    0.116279 0.540698 0.558140 0.616279 0.598837
          TNAO 289    0.124567 0.664360 0.456747 0.581315 0.598616
          KALS 560    0.135714 0.682143 0.580357 0.664286 0.548214
          RIKI 196    0.137755 0.576531 0.418367 0.724490 0.591837
          KAOR  71    0.140845 0.732394 0.478873 0.760563 0.605634
          SAKI  71    0.140845 0.450704 0.577465 0.521127 0.619718
```

样本量 >=20 时，相对高一致率角色：

```text
character_code   n  match_rate  EI_rate  SN_rate  TF_rate  JP_rate
          YKNO  21    0.333333 0.666667 0.714286 0.904762 0.714286
          IQBT  25    0.320000 0.760000 0.440000 0.760000 0.880000
          ELNA  40    0.275000 0.800000 0.625000 0.600000 0.625000
          KMOM 123    0.268293 0.731707 0.601626 0.739837 0.682927
          RYOO  21    0.238095 0.761905 0.714286 0.476190 0.714286
          SORA  36    0.222222 0.750000 0.527778 0.666667 0.638889
          EVIL  33    0.181818 0.666667 0.484848 0.575758 0.636364
          FREN  22    0.181818 0.636364 0.681818 0.636364 0.500000
          PHRV  62    0.177419 0.758065 0.822581 0.645161 0.387097
          KRSU 211    0.175355 0.687204 0.578199 0.696682 0.677725
```

## 逻辑回归权重参考

```text
dimension    n  positive  negative  accuracy  note
       EI 3721       990      2731  0.751678   NaN
       SN 3721       752      2969  0.597315   NaN
       TF 3721      1442      2279  0.685906   NaN
       JP 3721      1190      2531  0.683221   NaN
```

已生成 `top_weight_questions_mapped.csv`，用于把权重最高的问题映射回题文和现有维度。后续按“只改权重、不改题面”的口径处理，重点先看：

- EI：q28、q12、q32、q39 方向稳定；q23 在 EI 上出现同维度方向冲突，第一轮通过维度权重层移出 E/I 主判定。
- SN：模型最强信号来自 q37/q23/q31/q5 这些跨维度题，说明 S/N 原题本身信号弱；q35 在 S/N 上出现方向冲突，第一轮只做权重反向校准。
- TF：q9、q29、q19、q27、q22 等同维度题方向稳定，可作为保留锚点。
- JP：q8、q2、q38、q31、q37 是主要候选；考虑当前整体过度预测 J，第一轮压低 J 题强度并保留部分 P 题信号。

## 微调建议

1. 先不要大改整套评分。先通过 `questionDimensionWeights.json` 修 S/N 与 J/P，因为这两维拖累最大。
2. 第一批只覆盖 8 道题的维度算分权重：q23、q35、q37、q31、q5、q8、q2、q38；q9、q29 保留不动。
3. 不改题面、不改 `dimension/sign`，避免把“文案变化”和“权重变化”混在一起。
4. 对 S/N 用 q23、q35、q37 提供 N 方向信号；对 J/P 降低噪声题与 J 偏置。
5. 角色层面先降低 MARN、ERUC、TMRS、NENE、TAFI、CIRN 等低一致率且样本量足够角色的命中优先级，或者复核它们的 MBTI/原型映射。
6. 下一版发布后必须 bump `APP_VERSION`，再用 `by_version.csv` 判断是否真正变好。

## 第一轮权重回放

使用 `answers_json` 对高置信历史样本离线重算，第一轮维度权重覆盖的回放指标为：

```text
segment          n  match_rate  EI_rate  SN_rate  TF_rate  JP_rate
confidence>=4 3721    0.184628 0.596076 0.700887 0.658963 0.650363
confidence>=5 2099    0.196760 0.604097 0.699857 0.676036 0.661744
```

该结果是历史样本回放，不等同于线上真实提升；上线后仍以新 `app_version` 的 feedback 为准。
